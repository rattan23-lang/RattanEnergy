// app/blogs/[title]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import blogData from '../blogs.json';

// Explicitly type the params according to Next.js structure
interface Props {
  params: Promise<{ title: string }>;
}

// Function to convert title to URL-friendly slug
const titleToSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Mark the component as async and use the correct Props type
export default async function BlogPost({ params }: Props) {
  // Await the params to get the title
  const { title } = await params;

  const post = blogData.posts.find(post => 
    titleToSlug(post.title) === title
  );

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

// Type for metadata params
interface MetadataProps {
  params: Promise<{ title: string }>;
}

// Generate metadata with correct typing
export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { title } = await params;
  
  const post = blogData.posts.find(post => 
    titleToSlug(post.title) === title
  );

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// Generate static params
export function generateStaticParams() {
  return blogData.posts.map((post) => ({
    title: titleToSlug(post.title),
  }));
}