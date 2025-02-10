// types/blog.ts
export interface BlogPost {
  id:number;
    title: string;
    description: string;
    date?: string;
    author?: string;
    image?: string;
    publishedAt: string;
    readTime: string;
    category: string;
    content: string;
    
}

export interface BlogApiResponse {
    status: string;
    data: BlogPost[];
}
  