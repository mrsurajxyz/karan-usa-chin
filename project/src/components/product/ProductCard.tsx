import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative animate-fade-in">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative pb-[125%] overflow-hidden bg-jewelry-secondary rounded-md">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Secondary image on hover (if available) */}
          {product.images.length > 1 && (
            <img 
              src={product.images[1]} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Status badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.new && (
            <span className="bg-purple-light text-white text-xs py-1 px-2 rounded">New</span>
          )}
          {product.featured && (
            <span className="bg-gold text-white text-xs py-1 px-2 rounded">Featured</span>
          )}
          {product.bestseller && (
            <span className="bg-purple text-white text-xs py-1 px-2 rounded">Bestseller</span>
          )}
        </div>
      </Link>

      {/* Wishlist Button */}
      <button 
        onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)}
        className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md transition-colors"
      >
        <Heart 
          size={18} 
          className={inWishlist ? "fill-red-500 text-red-500" : "text-gray-400"}
        />
      </button>

      {/* Product Info */}
      <div className="mt-4 flex flex-col">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-jewelry-primary font-medium transition-colors hover:text-gold">
            {product.name}
          </h3>
          
          <p className="mt-1 text-sm text-gray-500">
            {product.metal}{product.stone ? `, ${product.stone}` : ''}
          </p>
          
          <p className="mt-2 font-semibold text-jewelry-primary">
            {formatCurrency(product.price)}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;