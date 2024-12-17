"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    title: "SEO Basics: Beginner's Guide to SEO Success",
    description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    href: "/blogs/seo-basics",
  },
  {
    title: "How to quickly deploy a static website",
    description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    href: "/blogs/deploy-static-website",
  },
  {
    title: "How to Rank Higher on Google (6 Easy Steps)",
    description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    href: "/blogs/rank-higher-google",
  },
  {
    title: "What is SEO? Search Engine Optimization Explained",
    description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    href: "/blogs/what-is-seo",
  },
  {
    title: "12 SEO Best Practices That Everyone Should Follow",
    description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    href: "/blogs/seo-best-practices",
  },
  {
    title: "How to schedule your Tweets to send later",
    description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    href: "/blogs/schedule-tweets",
  },
];

export function BlogGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              index={index}
              title={post.title}
              description={post.description}
              image={post.image}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}