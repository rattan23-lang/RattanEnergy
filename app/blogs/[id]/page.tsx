import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import blogData from '../../../components/blog/blog-posts.json';
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Define the structure of your blog post for better type safety
interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: string;
}

// Correctly type the parameters
interface PageParams {
  id: string;
}

// Define the generateMetadata function with correct typing
export async function generateMetadata({ 
  params 
}: { 
  params: PageParams 
}): Promise<Metadata> {
  const post = blogData.posts.find(post => post.id.toString() === params.id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// Generate static params
export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Page component with correct prop typing
export default async function BlogPost({ 
  params 
}: { 
  params: PageParams 
}) {
  const post = blogData.posts.find(post => post.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      <BlogContent post={post} />
      <Newsletter />
    </div>
  );
}