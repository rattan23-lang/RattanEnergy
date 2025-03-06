import { Suspense } from "react";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { fetchBlogPosts } from "@/lib/api";
import { Spinner } from "@/components/ui/spinner";

export default async function page() {
  try {
    const posts = await fetchBlogPosts();
    return (
      <div className="min-h-screen bg-background">
        <Suspense fallback={<Spinner />}>
          <BlogGrid initialPosts={posts} />
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground">
            Failed to load blog posts. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}