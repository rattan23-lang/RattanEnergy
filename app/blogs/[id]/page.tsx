// [id]/page.tsx
import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import blogData from '../../../components/blog/blog-posts.json';
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogData.posts.find(post => post.id.toString() === params.id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogData.posts.find(post => post.id.toString() === params.id);

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
        <Newsletter />
      </div>
    </main>
  );
}
