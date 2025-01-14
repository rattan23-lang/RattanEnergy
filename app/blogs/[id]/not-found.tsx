import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-muted-foreground mb-6">
          Could not find the requested blog post.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Return to Blog
        </Link>
      </div>
    </div>
  );
}