import { Metadata } from "next";
import { motion } from "framer-motion";
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
import { ChevronLeft, Box, Gauge, Wrench, Zap } from "lucide-react";
import { getProduct, generateProductStaticParams } from "@/lib/productapi";

// This is required for static export
export async function generateStaticParams() {
  return generateProductStaticParams();
}

interface PageProps {
  params: Promise<{ id: string }>;
}

function getImageUrl(url: string) {
  if (!url) return '';
  
  // Extract the file ID from various possible Google Drive URL formats
  const idMatch = url.match(/[-\w]{25,}/);
  if (!idMatch) return url;
  
  const fileId = idMatch[0];
  // Use the same Google Photos CDN URL format as blogs
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

function getWhatsAppLink(productName: string) {
  const message = encodeURIComponent(`Hi, I'm interested in ${productName}`);
  return `https://wa.me/917888733548?text=${message}`;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  try {
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
          {/* blog api ->
  // https://docs.google.com/spreadsheets/d/1lBjDt0GoU2hGlJWucrOnxkqRRajVKQx2WIe8zAJzbdk/edit?gid=0#gid=0 
  // https://script.google.com/macros/s/AKfycbxa1eJHRfpmdP5UgSN_T3aqMxd-Q5CjN4ry6O6W8HWs8eEn21nTMTElvcK3tfrtxBaY/exec
  dealr:
  https://docs.google.com/spreadsheets/d/1wr7ICCKZ8jMfv-EANEU2FYpVFMBbqNew3O23DtYWZhk/edit?usp=sharing
  inter: https://sheetdb.io/api/v1/nqfxbv2jox06z
  // Product api->
  https://docs.google.com/spreadsheets/d/12M8neYZlJnX54GWdztzb6seysL_heL6yRCTevCeoz-g/edit?usp=sharing
  // https://script.google.com/macros/s/AKfycbzOhAx-8VP4wKAJXJyi2_g7m4aY4EjD59A7e1hk0ikKQVcMqqCU0vvUPZqAP53dKhkx/exec
  // deployment ID= AKfycbzOhAx-8VP4wKAJXJyi2_g7m4aY4EjD59A7e1hk0ikKQVcMqqCU0vvUPZqAP53dKhkx

  ctc:https://docs.google.com/spreadsheets/d/1TK-izEvP-qrKkbXrW_3hnkeSUOwj_m1f89qUfksJKgM/edit?usp=sharing
  https://sheetdb.io/api/v1/6zfdxem3iwgu2

  // contactrattanergyindia@gmail.com
  // Rahul9814@
  // dealershiprattanenergyindia@gmail.com
  // Rattan9814@
  // rattandealer758@gmail.com */}
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
              <p className="text-2xl font-bold text-primary">{product.price}</p>
              <p className="text-muted-foreground">{product.description}</p>

              {/* Features section */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="grid gap-2">
                  {product.features.map((feature, index) => (
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

          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="features">
              <TabsList className="grid w-full  grid-cols-2">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                
              </TabsList>
              <TabsContent value="features">
                <Card>
                  <CardContent className="p-6">
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {product.features.map((feature, index) => (
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
                    <dl className="grid gap-4 sm:grid-cols-2">
                      {Object.entries(product.specification).map(([key, value]) => (
                        <div key={key}>
                          <dt className="font-medium">{key}</dt>
                          <dd className="text-muted-foreground">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
              
            </Tabs>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    return (
      <div className="container py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold">Error Loading Product</h1>
        <Button asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }
}