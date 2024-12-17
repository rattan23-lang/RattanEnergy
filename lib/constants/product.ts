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

export const products: { [key: string]: Product } = {
  "1": {
    id: 1,
    name: "Industrial Generator X1000",
    category: "Industrial",
    power: "1000kW",
    price: "$75,000",
    description: "High-performance industrial generator for continuous power supply.",
    features: [
      "Continuous Power Output: 1000kW",
      "Voltage: 380-480V",
      "Frequency: 50/60Hz",
      "Fuel Type: Diesel",
      "Noise Level: 75dB",
      "Runtime: 24 hours",
    ],
    specifications: {
      dimensions: "4.5m x 2.2m x 2.5m",
      weight: "8500 kg",
      fuelCapacity: "1000L",
      engineType: "V12 Diesel",
      coolingSystem: "Liquid Cooled",
      startingSystem: "Electric",
    },
    images: [
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
      "https://images.unsplash.com/photo-1531345018406-58f5afd943c1?q=80&w=1974",
    ],
  },
  "2": {
    id: 2,
    name: "Commercial Generator C500",
    category: "Commercial",
    power: "500kW",
    price: "$45,000",
    description: "Reliable commercial generator for medium-sized businesses.",
    features: [
      "Continuous Power Output: 500kW",
      "Voltage: 380-480V",
      "Frequency: 50/60Hz",
      "Fuel Type: Diesel",
      "Noise Level: 70dB",
      "Runtime: 18 hours",
    ],
    specifications: {
      dimensions: "3.5m x 1.8m x 2.0m",
      weight: "5500 kg",
      fuelCapacity: "750L",
      engineType: "Inline 6 Diesel",
      coolingSystem: "Liquid Cooled",
      startingSystem: "Electric",
    },
    images: [
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1531345018406-58f5afd943c1?q=80&w=1974",
    ],
  },
  "3": {
    id: 3,
    name: "Residential Generator R100",
    category: "Residential",
    power: "100kW",
    price: "$15,000",
    description: "Perfect backup power solution for homes and small offices.",
    features: [
      "Continuous Power Output: 100kW",
      "Voltage: 220-240V",
      "Frequency: 50/60Hz",
      "Fuel Type: Gasoline",
      "Noise Level: 65dB",
      "Runtime: 12 hours",
    ],
    specifications: {
      dimensions: "1.5m x 0.8m x 1.2m",
      weight: "850 kg",
      fuelCapacity: "200L",
      engineType: "4-Cylinder Gasoline",
      coolingSystem: "Air Cooled",
      startingSystem: "Electric/Manual",
    },
    images: [
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
    ],
  },
  "4": {
    id: 4,
    name: "Portable Generator P50",
    category: "Portable",
    power: "50kW",
    price: "$5,000",
    description: "Compact and portable generator for outdoor activities and emergencies.",
    features: [
      "Continuous Power Output: 50kW",
      "Voltage: 110-120V",
      "Frequency: 50/60Hz",
      "Fuel Type: Propane",
      "Noise Level: 60dB",
      "Runtime: 8 hours",
    ],
    specifications: {
      dimensions: "0.8m x 0.5m x 0.7m",
      weight: "250 kg",
      fuelCapacity: "50L",
      engineType: "2-Cylinder Propane",
      coolingSystem: "Air Cooled",
      startingSystem: "Manual",
    },
    images: [
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1531345018406-58f5afd943c1?q=80&w=1974",
    ],
  },
  "5": {
    id: 5,
    name: "Residential Generator R100",
    category: "Residential",
    power: "100kW",
    price: "$15,000",
    description: "Perfect backup power solution for homes and small offices.",
    features: [
      "Continuous Power Output: 100kW",
      "Voltage: 220-240V",
      "Frequency: 50/60Hz",
      "Fuel Type: Gasoline",
      "Noise Level: 65dB",
      "Runtime: 12 hours",
    ],
    specifications: {
      dimensions: "1.5m x 0.8m x 1.2m",
      weight: "850 kg",
      fuelCapacity: "200L",
      engineType: "4-Cylinder Gasoline",
      coolingSystem: "Air Cooled",
      startingSystem: "Electric/Manual",
    },
    images: [
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
    ],
  },
  "6": {
    id: 6,
    name: "Residential Generator R100",
    category: "Residential",
    power: "100kW",
    price: "$15,000",
    description: "Perfect backup power solution for homes and small offices.",
    features: [
      "Continuous Power Output: 100kW",
      "Voltage: 220-240V",
      "Frequency: 50/60Hz",
      "Fuel Type: Gasoline",
      "Noise Level: 65dB",
      "Runtime: 12 hours",
    ],
    specifications: {
      dimensions: "1.5m x 0.8m x 1.2m",
      weight: "850 kg",
      fuelCapacity: "200L",
      engineType: "4-Cylinder Gasoline",
      coolingSystem: "Air Cooled",
      startingSystem: "Electric/Manual",
    },
    images: [
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
    ],
  },
  "7": {
    id: 7,
    name: "Residential Generator R100",
    category: "Residential",
    power: "100kW",
    price: "$15,000",
    description: "Perfect backup power solution for homes and small offices.",
    features: [
      "Continuous Power Output: 100kW",
      "Voltage: 220-240V",
      "Frequency: 50/60Hz",
      "Fuel Type: Gasoline",
      "Noise Level: 65dB",
      "Runtime: 12 hours",
    ],
    specifications: {
      dimensions: "1.5m x 0.8m x 1.2m",
      weight: "850 kg",
      fuelCapacity: "200L",
      engineType: "4-Cylinder Gasoline",
      coolingSystem: "Air Cooled",
      startingSystem: "Electric/Manual",
    },
    images: [
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
    ],
  },
  "8": {
    id: 8,
    name: "Residential Generator R100",
    category: "Residential",
    power: "100kW",
    price: "$15,000",
    description: "Perfect backup power solution for homes and small offices.",
    features: [
      "Continuous Power Output: 100kW",
      "Voltage: 220-240V",
      "Frequency: 50/60Hz",
      "Fuel Type: Gasoline",
      "Noise Level: 65dB",
      "Runtime: 12 hours",
    ],
    specifications: {
      dimensions: "1.5m x 0.8m x 1.2m",
      weight: "850 kg",
      fuelCapacity: "200L",
      engineType: "4-Cylinder Gasoline",
      coolingSystem: "Air Cooled",
      startingSystem: "Electric/Manual",
    },
    images: [
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
    ],
  },
  "9": {
    id: 9,
    name: "Residential Generator R100",
    category: "Residential",
    power: "100kW",
    price: "$15,000",
    description: "Perfect backup power solution for homes and small offices.",
    features: [
      "Continuous Power Output: 100kW",
      "Voltage: 220-240V",
      "Frequency: 50/60Hz",
      "Fuel Type: Gasoline",
      "Noise Level: 65dB",
      "Runtime: 12 hours",
    ],
    specifications: {
      dimensions: "1.5m x 0.8m x 1.2m",
      weight: "850 kg",
      fuelCapacity: "200L",
      engineType: "4-Cylinder Gasoline",
      coolingSystem: "Air Cooled",
      startingSystem: "Electric/Manual",
    },
    images: [
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974",
    ],
  },

};

// Function to get a single product
export const getProduct = (id: string): Product | undefined => {
  return products[id];
};

// Function to get all products
export const getAllProducts = (): Product[] => {
  return Object.values(products);
};

// Function to generate static params for product pages
export const generateProductStaticParams = (): { id: string }[] => {
  return Object.keys(products).map((id) => ({ id }));
};