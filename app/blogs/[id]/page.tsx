

import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import { getAllBlogIds, getBlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const ids = getAllBlogIds();
  return ids.map((id) => ({
    id: id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto py-4">
        <BackButton />
        <BlogContent post={post} />
        
      </div>
      <div className="py-4">
        <Newsletter/>
      </div>
    </main>
  );
}