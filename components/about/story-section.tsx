"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StorySection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1995, Rattanenergy began with a simple mission: to provide reliable power solutions for businesses worldwide. What started as a small workshop has grown into a global leader in industrial power generation.
              </p>
              <p>
                Over five decades, we&apos;ve continuously innovated and expanded our capabilities, adapting to changing market needs while maintaining our commitment to quality and reliability.
              </p>
              <p>
                Today, we&apos;re proud to be at the forefront of sustainable power generation, combining traditional expertise with cutting-edge technology to serve our clients better.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto h-[400px] w-11/12 md:w-full max-w-[600px] overflow-hidden rounded-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070"
              alt="Our History"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}