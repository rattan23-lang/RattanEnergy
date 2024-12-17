export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    image?: string;
    author: string;
    category: string;
    publishedAt: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "seo-basics",
      title: "SEO Basics: Beginner's Guide to SEO Success",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      content: `Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.
  
  Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.
  
  But then I found a component library based on Tailwind CSS called Flowbite. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.`,
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      author: "Jese Leos",
      category: "World News",
      publishedAt: "August 3, 2022, 2:20am EDT"
    },
    {
      id: "deploy-static-website",
      title: "How to quickly deploy a static website",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      content: "Learn the best practices for deploying static websites quickly and efficiently.",
      author: "Sarah Johnson",
      category: "Development",
      publishedAt: "August 4, 2022, 3:15pm EDT"
    },
    {
      id: "rank-higher-google",
      title: "How to Rank Higher on Google (6 Easy Steps)",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      content: "Discover proven strategies to improve your website's Google rankings.",
      author: "Mike Peters",
      category: "SEO",
      publishedAt: "August 5, 2022, 1:30pm EDT"
    },
    {
      id: "what-is-seo",
      title: "What is SEO? Search Engine Optimization Explained",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      content: "A comprehensive guide to understanding Search Engine Optimization.",
      author: "Emily Chen",
      category: "SEO",
      publishedAt: "August 6, 2022, 11:45am EDT"
    },
    {
      id: "seo-best-practices",
      title: "12 SEO Best Practices That Everyone Should Follow",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      content: "Essential SEO practices to improve your website's visibility.",
      author: "David Wilson",
      category: "SEO",
      publishedAt: "August 7, 2022, 9:20am EDT"
    },
    {
      id: "schedule-tweets",
      title: "How to schedule your Tweets to send later",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      content: "Learn how to effectively schedule and manage your Twitter content.",
      author: "Lisa Brown",
      category: "Social Media",
      publishedAt: "August 8, 2022, 4:10pm EDT"
    }
  ];
  
  export function getBlogPost(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id);
  }
  
  export function getAllBlogIds(): string[] {
    return blogPosts.map(post => post.id);
  }