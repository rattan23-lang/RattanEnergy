"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import { BlogPost } from "@/types/blog";
import { useState, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";

interface BlogGridProps {
  initialPosts: BlogPost[];
}

const titleToSlug = (title: string, id?: string | number) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return id ? `${baseSlug}-${String(id)}` : baseSlug;
};

const isPostEmpty = (post: BlogPost) => {
  return !post.title && !post.description && !post.image;
};

export function BlogGrid({ initialPosts }: BlogGridProps) {
  const [isLoading, setIsLoading] = useState(!initialPosts?.length);
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);

  useEffect(() => {
    if (initialPosts?.length) {
      const filteredPosts = initialPosts.filter((post) => !isPostEmpty(post));
      setPosts(filteredPosts);
      setIsLoading(false);
    }
  }, [initialPosts]);

  if (isLoading) {
    return <Spinner />;
  }

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
          {posts.map((post, index) => (
            <BlogCard
              key={post.id ? post.id : `post-${index}`}
              index={index}
              title={post.title}
              description={post.description}
              image={post.image}
              href={`/blogs/${titleToSlug(post.title, post.id)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}