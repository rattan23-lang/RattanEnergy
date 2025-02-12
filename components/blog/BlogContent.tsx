"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Share2, Twitter } from "lucide-react";
import React from 'react';
import { BlogPost } from '@/types/blog';

interface BlogContentProps {
    post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
    const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    // const formatDate = (dateString: string) => {
    //     try {
    //         return new Date(dateString).toLocaleDateString();
    //     } catch (error) {
    //         return dateString;
    //     }
    // };

    // Function to format the content into paragraphs and lists
    const formatContent = (content: string) => {
        // Split content into paragraphs
        const paragraphs = content.split('\\n\\n');

        return paragraphs.map((paragraph, index) => {
            // If paragraph contains bullet points (starts with -)
            if (paragraph.includes('\\n-')) {
                const [header, ...listItems] = paragraph.split('\\n');
                return (
                    <div key={index} className="mb-6">
                        {header && <p className="mb-4">{header}</p>}
                        <ul className="list-disc pl-6 space-y-2">
                            {listItems.map((item, i) => (
                                <li key={i} className="text-gray-700 dark:text-white">
                                    {item.replace('-', '').trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
            
            // Regular paragraph
            return (
                <p key={index} className="mb-6 text-gray-700 dark:text-white leading-relaxed">
                    {paragraph.trim()}
                </p>
            );
        });
    };

    // Function to handle direct Google Drive URLs
    const getImageUrl = (url: string) => {
        if (!url) return '';
        
        // Extract the file ID from the Google Drive URL
        const idMatch = url.match(/[-\w]{25,}/);
        if (!idMatch) return url;
        
        const fileId = idMatch[0];
        
        // Return the more reliable Google Photos CDN URL
        return `https://lh3.googleusercontent.com/d/${fileId}`;
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
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 dark:text-white">
                    <span>Published {(post.publishedAt)}</span>
                    <span>Written By {post.author}</span>
                    <span>{post.readTime}</span>
                    <span>in {post.category}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                    {post.title}
                </h1>
                <div className="prose prose-lg max-w-none">
                    {formatContent(post.description)}
                </div>
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
                <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                    <Image
                        src={getImageUrl(post.image)}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={400}
                        unoptimized
                    />
                </div>
            )}

            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg text-muted-foreground dark:text-white dark:prose-invert max-w-none"
            >
                {formatContent(post.content)}
            </motion.div>

        </article>
    );
}