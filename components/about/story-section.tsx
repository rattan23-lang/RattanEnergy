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
            <h2 className="mb-6 text-3xl font-bold">Our Journey Towards Reliable Power</h2>
            <div className="space-y-4 text-muted-foreground">
          
              <p>
              Founded in Chandigarh, Rattan Energy has been a trusted name in power solutions, offering a wide range of Honda and Rattan Energy generators. Our mission is simple—to provide reliable, efficient, and cost-effective energy solutions across India.              </p>
              <p>
              With years of industry expertise, our team is passionate about helping customers find the right generator, whether for commercial or residential use. We offer new and pre-used models, equipped with advanced inverter technology, noise-reducing mufflers, and fuel efficiency features.              </p>
              <p>
              Beyond sales, we provide expert installation, maintenance, and repair services, ensuring long-lasting performance. At Rattan Energy, we believe in quality, innovation, and customer satisfaction, making us a trusted partner for all your power needs.              </p>
              <p>Let us keep your world running—efficiently and uninterrupted. ⚡</p>
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