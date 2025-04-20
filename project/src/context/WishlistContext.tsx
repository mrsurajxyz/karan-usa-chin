import React, { createContext, useState, useContext, useEffect } from 'react';
import { getProductById } from '../data/products';
import { Product } from '../types';

interface WishlistContextType {
  wishlist: number[];
  products: Product[];
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  products: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false
});

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  // Load wishlist from localStorage when component mounts
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist);
        setWishlist(parsedWishlist);
        
        // Load products for the wishlist
        const wishlistProducts = parsedWishlist
          .map(id => getProductById(id))
          .filter(Boolean) as Product[];
        setProducts(wishlistProducts);
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update products whenever wishlist changes
    const wishlistProducts = wishlist
      .map(id => getProductById(id))
      .filter(Boolean) as Product[];
    setProducts(wishlistProducts);
  }, [wishlist]);

  const addToWishlist = (productId: number) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]);
    }
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(wishlist.filter(id => id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.includes(productId);
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      products,
      addToWishlist,
      removeFromWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};