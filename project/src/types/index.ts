export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
  metal?: string;
  stone?: string;
  weight?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  itemCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  wishlist: number[];
}