"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { topProducts } from "@/lib/constants/topProducts";

export function TopProductsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto max-w-[1400px] px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Top Products</h2>
          <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
            Discover our most popular power generation solutions trusted by industries worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <div className="absolute right-0 top-[-25px] md:top-[-50px] z-10 flex ">
              <CarouselPrevious 
                className="relative !h-9 !w-9  translate-x-0 
                bg-black/10 text-black 
                dark:bg-white/20 dark:text-white 
                hover:bg-black/20 
                dark:hover:bg-white/30"
              />
              <CarouselNext 
                className="relative !h-9 !w-9 mr-6 md:mr-0 translate-x-0 
                bg-black/10 text-black 
                dark:bg-white/20 dark:text-white 
                hover:bg-black/20 
                dark:hover:bg-white/30"
              />
            </div>

            <CarouselContent className="-ml-2 md:-ml-4">
              {topProducts.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 md:pl-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                    whileHover={{ y: -5 }}
                  >
                    <Card className="group h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl border-2">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 "
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                        <div className="p-6">
                          <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                            {product.name}
                          </h3>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            {/* <span className="text-xl font-bold text-primary">{product.price}</span> */}
                            <Button 
                              variant="secondary" 
                              asChild
                              className="transition-transform duration-300 group-hover:scale-105 w-full "
                            >
                              <Link href={`/products/${product.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}