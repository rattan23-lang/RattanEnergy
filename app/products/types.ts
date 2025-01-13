export interface ProductSpecifications {
    dimensions: string;
    weight: string;
    fuelCapacity: string;
    engineType: string;
    coolingSystem: string;
    startingSystem: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    category: string;
    power: string;
    price: string;
    description: string;
    features: string[];
    specifications: ProductSpecifications;
    images: string[];
  }
  