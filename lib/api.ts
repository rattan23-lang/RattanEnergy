// lib/api.ts
import { BlogPost,BlogApiResponse } from "@/types/blog";
export async function fetchBlogPosts(): Promise<BlogPost[]> {
    const API_URL = "https://script.google.com/macros/s/AKfycbxa1eJHRfpmdP5UgSN_T3aqMxd-Q5CjN4ry6O6W8HWs8eEn21nTMTElvcK3tfrtxBaY/exec";
    
    try {
      const response = await fetch(API_URL, { next: { revalidate: 0 } }); 
      
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      
      const data: BlogApiResponse = await response.json();
      if (data.status !== "success") throw new Error('API returned error status');
      
      return data.data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  }
  