import { BlogGrid } from "@/components/blog/BlogGrid";
import { fetchBlogPosts } from "@/lib/api";

// Statically fetch posts at build time
export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ title: post.title }));
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <BlogGrid initialPosts={posts} />
    </div>
  );
}

// Optional: Add revalidation for ISR
export const revalidate = 60; // Revalidate every 60 seconds