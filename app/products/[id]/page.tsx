import { notFound } from 'next/navigation';
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
import { getProduct, Product } from "@/lib/productapi";

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

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  // Await the params object if it's a Promise
  // const resolvedParams = params instanceof Promise ? await params : params;
  const productId = parseInt(params.id);
  
  const product = await getProduct(productId);
  
  if (!product) {
    return notFound();
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
                <p className="text-muted-foreground">{product.specification}</p>
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

        
      </div>
    </div>
  );
}