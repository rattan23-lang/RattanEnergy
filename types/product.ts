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

export interface ProductApiResponse {
    status: string;
    data: Product[];
}