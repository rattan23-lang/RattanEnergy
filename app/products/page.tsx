"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/lib/productapi";
import { fetchProducts } from "@/lib/productapi";
import { Spinner } from "@/components/ui/spinner";

function getImageUrl(url: string) {
  if (!url) return '';
  
  const idMatch = url.match(/[-\w]{25,}/);
  if (!idMatch) return url;
  
  const fileId = idMatch[0];
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (value === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        product => product.category.toLowerCase() === value.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Spinner/></div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070"
          alt="Products"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold">Our Products</h1>
            <p className="text-xl">Discover our range of power solutions</p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b py-6 px-2 md:px-36">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Select onValueChange={handleCategoryChange} defaultValue="all">
                <SelectTrigger className="w-[170px] md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                </SelectContent>
              </Select>
              {/* <Select>
                <SelectTrigger className="w-[170px] md:w-[180px]">
                  <SelectValue placeholder="Power Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ranges</SelectItem>
                  <SelectItem value="high">1000kW+</SelectItem>
                  <SelectItem value="medium">500-999kW</SelectItem>
                  <SelectItem value="low">100-499kW</SelectItem>
                  <SelectItem value="mini">Below 100kW</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
            {/* <Select>
              <SelectTrigger className="w-[170px] md:w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select> */}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-center"
              >
                <Card className="h-full w-full max-w-[300px]">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={getImageUrl(product.images[0])}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {product.category}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {product.power}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    {/* <p className="text-xl font-bold text-primary">{product.price}</p> */}
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}