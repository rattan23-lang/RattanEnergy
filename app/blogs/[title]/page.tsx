// blogs/[title]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import { fetchBlogPosts } from "@/lib/api";

// Change to auto instead of force-dynamic
export const dynamic = 'auto';
export const revalidate = 3600; // Revalidate at most every hour

// Use Next.js correct type definition
interface PageProps {
  params: {
    title: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

// Function to convert title to URL-friendly slug
const titleToSlug = (title: string, id?: string | number) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
    
  // If id is provided, append it to create a truly unique slug
  return id ? `${baseSlug}-${String(id)}` : baseSlug;
};

// Blog post page component with correct param types
export default async function BlogPost({ params }: PageProps) {
  const { title } = params;
  
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

// Metadata generation with correct param types
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

// Generate static params - critical for proper static paths generation
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