import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import { fetchBlogPosts } from "@/lib/api";

// For ISR
export const dynamic = "auto";
export const revalidate = 3600;

interface PageProps {
  params: Promise<{ title: string }>;
}

const titleToSlug = (title: string, id?: string | number) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return id ? `${baseSlug}-${String(id)}` : baseSlug;
};

export default async function BlogPost({ params }: PageProps) {
  const { title } = await params;
  const posts = await fetchBlogPosts();
  const post = posts.find((p) => titleToSlug(p.title, p.id) === title) || notFound();

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

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  const params = posts.map((post) => ({
    title: titleToSlug(post.title, post.id),
  }));
  console.log("Generated static params:", params); // Debug
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { title } = await params;
  const posts = await fetchBlogPosts();
  const post = posts.find((p) => titleToSlug(p.title, p.id) === title);

  return post
    ? { title: post.title, description: post.description }
    : { title: "Post Not Found", description: "The requested blog post could not be found." };
}