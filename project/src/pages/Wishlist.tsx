import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { useWishlist } from '../context/WishlistContext';

const Wishlist: React.FC = () => {
  const { products } = useWishlist();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl text-center text-jewelry-primary mb-2">My Wishlist</h1>
        <p className="text-gray-600 text-center mb-8">
          Items you've saved for later
        </p>
        
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-8 bg-jewelry-secondary rounded-full mb-6">
              <Heart size={48} className="text-gold" />
            </div>
            <h2 className="text-2xl font-medium text-jewelry-primary mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Save your favorite items to find them easily later.</p>
            <Link 
              to="/category/all"
              className="px-6 py-3 bg-gold text-jewelry-primary font-medium rounded hover:bg-gold-dark transition"
            >
              Explore Jewelry
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;