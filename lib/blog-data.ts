export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  image?: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: string;
  }
  
  
  
  // export function getBlogPost(id: string): BlogPost | undefined {
  //   return blogPosts.find(post => post.id === id);
  // }
  
  // export function getAllBlogIds(): string[] {
  //   return blogPosts.map(post => post.id);
  // }