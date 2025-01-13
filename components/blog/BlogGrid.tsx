"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import blogData from './blog-posts.json';

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
          {blogData.posts.map((post, index) => (
            <BlogCard
              key={post.id}
              index={index}
              title={post.title}
              description={post.description}
              image={post.image}
              href={`/blogs/${post.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
