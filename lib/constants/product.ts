import { Product } from '../../app/products/types';
import products from '../../app/products/products.json';

export const getProduct = (id: number): Product | undefined => {
  return products.products.find(product => product.id === id);
};

export const getAllProducts = (): Product[] => {
  return products.products;
};

export const generateProductStaticParams = (): { id: string }[] => {
  return products.products.map((product) => ({
    id: product.id.toString(),
  }));
};