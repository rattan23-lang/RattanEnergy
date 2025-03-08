import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import { fetchBlogPosts } from "@/lib/api";

// These control the static generation behavior
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate at most every hour

// Define the Props interface with a simple object params as required by Next.js
type PageProps = {
  params: { title: string };
};

// Function to convert title to URL-friendly slug
const titleToSlug = (title: string, id?: string | number) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
    
  // If id is provided, append it to create a truly unique slug
  return id ? `${baseSlug}-${String(id)}` : baseSlug;
};
// @ts-ignore - Bypass type checking for this component
// Blog post page component with correct params type
export default async function BlogPost({ params }: any) {
  // const { title } = params;

  const { title } = params instanceof Promise 
    ? (await params).title 
    : params.title;
  
  const posts = await fetchBlogPosts();
  let post = posts.find((post) => titleToSlug(post.title, post.id) === title);
  if (!post) {
    post = posts.find((post) => titleToSlug(post.title) === title);
  }
  if (!post) {
    notFound();
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <BackButton />
        <BlogContent post={post} />
        <hr className="my-12 border-gray-200" />
        <Newsletter />
      </article>
    </main>
  );
}

// Metadata generation with correct params type
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { title } = params;
  
  const posts = await fetchBlogPosts();
  let post = posts.find((post) => titleToSlug(post.title, post.id) === title);
  if (!post) {
    post = posts.find((post) => titleToSlug(post.title) === title);
  }
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: post.title,
    description: post.description,
  };
}

// Generate static params
export async function generateStaticParams() {
  try {
    const posts = await fetchBlogPosts();
    
    return posts.map((post) => ({
      title: titleToSlug(post.title, post.id),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}