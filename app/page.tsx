"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TopProductsSection } from "@/components/home/top-product-section";
import { HeroSection } from "@/components/home/hero-section";
import Newsletter from "@/components/home/newsletter";


const productCategories = [
  {
    title: "Industrial Generators",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070",
    description: "High-capacity power generation for industrial applications",
  },
  {
    title: "Commercial Generators",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070",
    description: "Reliable backup power for businesses",
  },
  {
    title: "Portable Solutions",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070",
    description: "Mobile power generation units",
  },
];

const testimonials = [
  {
    name: "John Smith",
    company: "Smith Manufacturing",
    content: "Rattan Energy has transformed our operations with their reliable power solutions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    role: "CEO",
  },
  {
    name: "Sarah Johnson",
    company: "Johnson Industries",
    content: "Outstanding service and top-notch products. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    role: "Operations Director",
  },
  {
    name: "Michael Brown",
    company: "Brown Enterprises",
    content: "The best industrial generator provider we've worked with.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070",
    role: "Technical Manager",
  },
  {
    name: "Emily Chen",
    company: "Chen Manufacturing",
    content: "Exceptional quality and reliability. A trusted partner for our power needs.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070",
    role: "Production Manager",
  },
  {
    name: "David Wilson",
    company: "Wilson Industries",
    content: "Professional team and excellent after-sales support.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
    role: "Facility Manager",
  },
];

export default function Home() {
 

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
       <HeroSection/>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-[1400px] px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">About Rattan Energy</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              With over 5+ years of experience, Rattan energy has been at the forefront of industrial power generation solutions.
              Our commitment to quality, innovation, and customer satisfaction makes us the preferred choice for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-muted py-20">
        <div className="container mx-auto max-w-[1400px] px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Solutions</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="product-card">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="rounded-t-lg object-cover transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                      <Button variant="secondary" asChild>
                        <Link href="/products">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section>
      <TopProductsSection/>
     </section>
     
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto max-w-[1400px] px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Clients Say</h2>
        </div>
        <div className="relative">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-4"
          >
            <div className="flex gap-6">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card key={index} className="testimonial-card w-[400px] flex-shrink-0">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      <section className="pb-4">
        <Newsletter/>
      </section>
    </div>
  );
}