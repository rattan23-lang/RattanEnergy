import { fetchBlogPosts } from "@/lib/api"; // Blog API
import { BlogPost } from "@/types/blog"; // Blog type
import { fetchProducts } from "@/lib/productapi"; // Product API
import { Product } from "@/lib/productapi"; // Product type
import { MetadataRoute } from "next";

// Function to convert blog title to slug (reused from your earlier blog code)
const titleToSlug = (title: string, id?: string | number) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return id ? `${baseSlug}-${String(id)}` : baseSlug;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic data
  const blogPosts: BlogPost[] = await fetchBlogPosts();
  const products: Product[] = await fetchProducts();

  // Static pages from your original code
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacypolicy/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/dealership/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Add products and blogs index pages
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic blog pages
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${titleToSlug(post.title, post.id)}`,
    lastModified: new Date(), // Replace with post.updatedAt if available
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic product pages
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.id}`,
    lastModified: new Date(), // Replace with product.updatedAt if available
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine all routes
  return [...staticPages, ...blogRoutes, ...productRoutes];
}