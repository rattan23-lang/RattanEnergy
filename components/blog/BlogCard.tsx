"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageUrl";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image?: string;
  index: number;
  href: string;
}

export function BlogCard({ title, description, image, index, href }: BlogCardProps) {
  const [imageError, setImageError] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  {console.log('img', image)}
  // Handle Google Drive image URLs and ensure proper error handling
  const getGoogleDriveImageUrl = (url: string) => {
    if (!url) return '';
    
    // Check if already in correct format
    if (url.includes('uc?export=view')) {
      return url;
    }

    // Extract file ID if in standard sharing format
    const fileIdMatch = url.match(/\/d\/(.*?)\//) || url.match(/id=(.*?)(&|$)/);
    if (fileIdMatch) {
      return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }

    return url;
  };

  // Transform image URL if needed
  const processedImageUrl = image ? getGoogleDriveImageUrl(image) : '';
  const variants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-card hover:shadow-lg transition-shadow duration-300"
    >
    {image && !imageError && (
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={getImageUrl(image)}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            unoptimized 
          />
        </div>
      )}
      
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-4">
          <Link
            href={href}
            className="inline-flex items-center text-primary hover:underline gap-1 transition-colors"
          >
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}