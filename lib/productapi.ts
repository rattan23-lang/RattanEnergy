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
  
  const API_URL = "https://script.google.com/macros/s/AKfycbzOhAx-8VP4wKAJXJyi2_g7m4aY4EjD59A7e1hk0ikKQVcMqqCU0vvUPZqAP53dKhkx/exec";
  
  export async function fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        console.error('API response not ok:', response.status);
        return [];
      }
      
      const data: ProductApiResponse = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  export async function getProduct(id: number): Promise<Product | undefined> {
    try {
      const products = await fetchProducts();
      return products.find(product => product.id === id);
    } catch (error) {
      console.error('Error getting product:', error);
      return undefined;
    }
  }

  export async function generateProductStaticParams() {
    const products = await fetchProducts();
    return products.map((product) => ({
        id: product.id.toString(),
    }));
  }