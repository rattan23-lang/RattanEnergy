import { Suspense } from "react";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { fetchBlogPosts } from "@/lib/api";
import { Spinner } from "@/components/ui/spinner";

// These control the static generation behavior
// Change to force-dynamic to avoid export path issues
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate at most every hour

export default async function BlogsPage() {
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