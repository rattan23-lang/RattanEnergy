import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { getProduct } from "@/lib/productapi";

// Enable dynamic rendering
export const dynamic = 'force-dynamic';

function getImageUrl(url: string) {
  if (!url) return '';
  
  const idMatch = url.match(/[-\w]{25,}/);
  if (!idMatch) return url;
  
  const fileId = idMatch[0];
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

function getWhatsAppLink(productName: string) {
  const message = encodeURIComponent(`Hi, I'm interested in ${productName}`);
  return `https://wa.me/917888733548?text=${message}`;
}

// Use the built-in Next.js types without custom interfaces
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = parseInt(params.id);
  const product = await getProduct(productId);
  
  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
        <Button asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-1 md:mx-3 md:my-3">
      <div className="container py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/products">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
        
        {/* Product Overview */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={getImageUrl(product.images[0])}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={getImageUrl(image)}
                    alt={`${product.name} view ${index + 2}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge>{product.category}</Badge>
              <Badge variant="secondary">{product.power}</Badge>
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground">{product.description}</p>

            {/* Features section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="grid gap-2">
                {Array.isArray(product.features) && product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specification if available */}
            {product.specification && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Specification</h2>
                <p className="text-muted-foreground">
                  {typeof product.specification === 'string' 
                    ? product.specification 
                    : JSON.stringify(product.specification)}
                </p>
              </div>
            )}

            <Button asChild size="lg" className="w-full">
              <a 
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Quote
              </a>
            </Button>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="features">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {Array.isArray(product.features) && product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specifications">
              <Card>
                <CardContent className="p-6">
                  {typeof product.specification === 'object' && product.specification !== null ? (
                    <dl className="grid gap-4 sm:grid-cols-2">
                      {Object.entries(product.specification).map(([key, value]) => (
                        <div key={key}>
                          <dt className="font-medium">{key}</dt>
                          <dd className="text-muted-foreground">{String(value)}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="text-muted-foreground">
                      {typeof product.specification === 'string' 
                        ? product.specification 
                        : JSON.stringify(product.specification)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}