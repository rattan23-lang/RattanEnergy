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
    title: "Commercial Generators",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070",
    description: "Reliable power solutions for businesses and industries.",
  },
  
  {
    title: "Residential Generators",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070",
    description: "Uninterrupted backup power for your home’s comfort.",
  },
];

const testimonials = [
  {
    name: "Suman Verma",
    company: "VLKT Steels & Co.",
    content: "Rattan Energy has transformed our operations with their reliable power solutions.",
    image: "https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "CEO",
  },
  {
    name: "Gagandeep Singh",
    company: "Bhullar Machines",
    content: "Outstanding service and top-notch products. Highly recommended!",
    image: "https://images.unsplash.com/photo-1534339480783-6816b68be29c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Operations Director",
  },
  {
    name: "Rajesh Sharma",
    company: "Jai Ambe Motors",
    content: "The best industrial generator provider we've worked with.",
    image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Technical Manager",
  },
  {
    name: "Diksha Thakur",
    company: "Chemma Motors",
    content: "Exceptional quality and reliability. A trusted partner for our power needs.",
    image: "https://images.unsplash.com/photo-1624610261655-777af2f586d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    role: "Production Manager",
  },
  {
    name: "Dhruv Chopra",
    company: "Shivalik Automobiles",
    content: "Professional team and excellent after-sales support.",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
    role: "Facility Manager",
  },
];

export default function Home() {
 

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="">
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
            At Rattan Energy, we are committed to delivering top-quality generators in commercial as well as residential sector across India. With a strong focus on performance, durability, and innovation, we provide power solutions that keep your world running without interruption. <br />From sales to expert installation, maintenance, and repairs, our team ensures you get the best service and support. Whether for commercial or residential use, we help you find the perfect generator to match your needs. Reliable power starts here! ⚡
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-muted py-20">
        <div className="container mx-auto max-w-[1400px] px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2">
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

     {/* <section>
      <TopProductsSection/>
     </section> */}
     
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

      <section className="pb-4 mb-3">
        <Newsletter/>
      </section>
    </div>
  );
}