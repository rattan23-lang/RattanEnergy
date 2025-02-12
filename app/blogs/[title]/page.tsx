// app/blogs/[title]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
// import blogData from '../blogs.json';
import { fetchBlogPosts } from "@/lib/api";

// Update the Props interface to use Promise
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

// Update the component to await params
export default async function BlogPost({ params: paramsPromise }: Props) {
  const params = await paramsPromise;
  const { title } = params;
  
  const posts = await fetchBlogPosts();
  const post = posts.find(post => 
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

// Update MetadataProps interface
interface MetadataProps {
  params: Promise<{ title: string }>;
}

// Update generateMetadata to await params
export async function generateMetadata({ params: paramsPromise }: MetadataProps): Promise<Metadata> {
  const params = await paramsPromise;
  const decodedTitle = decodeURIComponent(params.title);
  
  const posts = await fetchBlogPosts();
  const post = posts.find(post => 
    titleToSlug(post.title) === decodedTitle
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
export async function generateStaticParams() {
  try {
    const posts = await fetchBlogPosts();
    
    return posts.map((post) => ({
      title: titleToSlug(post.title),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}