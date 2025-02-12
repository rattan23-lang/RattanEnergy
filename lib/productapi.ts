export interface Product {
    id: number;
    name: string;
    category: string;
    power: string;
    price: string;
    description: string;
    features: string[];
    specification: string;
    images: string[];
  }
  
  interface ProductApiResponse {
    status: string;
    data: Product[];
  }
  
  export async function fetchProducts(): Promise<Product[]> {
    const API_URL = "https://script.google.com/macros/s/AKfycbzOhAx-8VP4wKAJXJyi2_g7m4aY4EjD59A7e1hk0ikKQVcMqqCU0vvUPZqAP53dKhkx/exec";
    
    try {
      const response = await fetch(API_URL, { next: { revalidate: 3600 } });
      
      if (!response.ok) throw new Error('Failed to fetch products');
      
      const data: ProductApiResponse = await response.json();
      if (data.status !== "success") throw new Error('API returned error status');
      
      return data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  export async function getProduct(id: number): Promise<Product | undefined> {
    const products = await fetchProducts();
    return products.find(product => product.id === id);
  }

  export async function generateProductStaticParams() {
    const products = await fetchProducts();
    return products.map((product) => ({
        id: product.id.toString(),
    }));
  }