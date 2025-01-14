// app/blogs/[id]/page.tsx
'use server';
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

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

interface PageProps {
    params: { id: string };
}


export default async function BlogPost({ params: paramsPromise }: PageProps) {
    // Await params before using it
    const params = await paramsPromise;
    const post = (blogData as BlogData).posts.find(
        (post) => post.id === parseInt(params.id)
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

export async function generateStaticParams() {
    return (blogData as BlogData).posts.map((post) => ({
        id: post.id.toString(),
    }));
}
