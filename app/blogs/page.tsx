import { Suspense } from "react";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { fetchBlogPosts } from "@/lib/api";
import { Spinner } from "@/components/ui/spinner";

// For ISR (recommended for API data)
export const dynamic = "auto";
export const revalidate = 3600;

export default async function BlogsPage() {
  const posts = await fetchBlogPosts();
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<Spinner />}>
        <BlogGrid initialPosts={posts} />
      </Suspense>
    </div>
  );
}