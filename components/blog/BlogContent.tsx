"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Share2, Twitter } from "lucide-react";

// Update the BlogPost interface to match your data structure
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

interface BlogContentProps {
    post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
    const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString();
        } catch (error) {
            return dateString;
        }
    };

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>Published {formatDate(post.publishedAt)}</span>
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                    <span>in {post.category}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                    {post.title}
                </h1>
                <p className="text-xl text-muted-foreground">{post.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                    <button 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                        onClick={() => navigator.share?.({
                            title: post.title,
                            text: post.description,
                            url: window.location.href
                        }).catch(() => {})}
                    >
                        <Share2 className="h-4 w-4" />
                        Share
                    </button>
                    <button 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                        onClick={() => {
                            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
                            window.open(tweetUrl, '_blank');
                        }}
                    >
                        <Twitter className="h-4 w-4" />
                        Tweet
                    </button>
                </div>
            </motion.div>

            {post.image && (
                <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[400px] sm:h-[500px] mb-12 rounded-lg overflow-hidden"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            )}

            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg dark:prose-invert max-w-none"
            >
                {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </motion.div>
        </article>
    );
}