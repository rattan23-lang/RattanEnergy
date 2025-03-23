"use client";

import { useState, useEffect, lazy } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      image: "https://ik.imagekit.io/0ilh5c8tu/hero1.jpg?updatedAt=1741866821559",
      // title: "Powering Progress",
      // subtitle: "Industrial Solutions for a Sustainable Future",
      // cta: "Explore Products",
      // link: "/products"
    },
    
    {
      image: "https://ik.imagekit.io/0ilh5c8tu/hero2.jpg?updatedAt=1741866821770",
      // title: "Innovation First",
      // subtitle: "Leading the Future of Power Generation",
      // cta: "Learn More",
      // link: "/about"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-[250px] min-h-[250px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
           <div className="relative h-full w-full">
          <Image
            src={slide.image}
            alt="Rattan energy"
            fill
            priority={index === 0}
            className="object-cover object-center brightness-100"
             sizes="100vw"
            quality={100}
          />
          </div>
          {/* <div className=" inset-0 " /> */}
          {/* <div className=" inset-0 flex items-center justify-center"> */}
            {/* <div className="container text-center text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-4 text-5xl font-bold"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-8 text-xl"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button asChild size="lg" className="font-semibold">
                  <Link href={slide.link}>{slide.cta}</Link>
                </Button>
              </motion.div>
            </div> */}
          {/* </div> */}
        </motion.div>
       
      ))}
       </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-1 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}