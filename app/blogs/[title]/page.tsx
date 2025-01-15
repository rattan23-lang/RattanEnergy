// app/blogs/[title]/page.tsx
import { notFound } from "next/navigation";
import { BackButton } from "@/components/blog/BackButton";
import { BlogContent } from "@/components/blog/BlogContent";
import Newsletter from "@/components/home/newsletter";
import blogData from '../blogs.json';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
    author: string;
    category: string;
    publishedAt: string;
    readTime: string;
}

interface BlogData {
    posts: BlogPost[];
}

// Create a function to convert title to URL-friendly slug
const titleToSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};

interface PageProps {
    params: { title: string };
}

// Mark the component as async
export default async function BlogPost({ params }: PageProps) {
    // Await the params
    const { title } = await params;

    // Find the post based on the slugified title
    const post = (blogData as BlogData).posts.find(post => 
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

// Generate static params
export async function generateStaticParams() {
    return (blogData as BlogData).posts.map((post) => ({
        title: titleToSlug(post.title),
    }));
}