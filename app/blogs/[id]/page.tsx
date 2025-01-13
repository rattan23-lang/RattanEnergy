import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import blogData from '../../../components/blog/blog-posts.json';
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Define params type for generateMetadata
type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogData.posts.find(post => post.id.toString() === params.id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPost({ params }: Props) {
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