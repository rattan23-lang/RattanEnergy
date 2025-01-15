"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StatsSection } from "@/components/about/stats-section";
import { StorySection } from "@/components/about/story-section";
import { TeamSection } from "@/components/about/team-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070"
          alt="About Us"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <motion.h1
              className="mb-4 text-5xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              About Rattan Energy
            </motion.h1>
            <motion.p
              className="text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Powering Progress Since 1995
            </motion.p>
          </div>
        </div>
      </section>

      <StatsSection />
      <StorySection />
      <TeamSection />
    </div>
  );
}
