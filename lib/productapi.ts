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
  
  const EXTRA_GENERATOR: Product = {
    id: 5,
    name: "Generator RE 9500",
    category: "Commercial",
    power: "8.5 KVA",
    price: "",
    description: "High-performance industrial generator for heavy-duty continuous power supply.",
    features: [
      "Max power: 8500W",
      "Rated power: 8000W",
      "Rated Voltage: 220V",
      "Frequency: 50Hz",
      "Motor type: Brush motor, single phase",
      "Engine type: Single cylinder, OHV, 4-stroke, air cooled, gasoline engine",
      "Displacement: 500CC",
      "Power/Speed(kw/r/min): 9.6/3000",
      "Fuel tank: 25 litres",
      "Continuous working hours: 8h (@full load)",
      "Starting system: Recoil / Electric start",
      "Dimensions: 680 x 515 x 535 mm",
      "Wheels and handles"
    ],
    specification: "",
    images: ["/images/generator-re8500.jpg"],
  };

  export async function fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        console.error('API response not ok:', response.status);
        return [EXTRA_GENERATOR];
      }

      const data: ProductApiResponse = await response.json();
      const products = data.data || [];

      const mrfIndex = products.findIndex(p => p.name.toLowerCase().includes('mrf'));
      if (mrfIndex !== -1) {
        products.splice(mrfIndex, 0, EXTRA_GENERATOR);
      } else {
        products.push(EXTRA_GENERATOR);
      }

      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [EXTRA_GENERATOR];
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