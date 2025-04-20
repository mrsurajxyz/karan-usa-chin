import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, ZoomIn, Check, ArrowLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatCurrency } from '../utils/formatCurrency';
import ProductGrid from '../components/product/ProductGrid';
import { getProductsByCategory } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  const product = getProductById(productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  // If product doesn't exist
  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16 text-center">
        <h2 className="text-2xl font-medium text-jewelry-primary mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/category/all"
          className="px-6 py-3 bg-gold text-jewelry-primary font-medium rounded hover:bg-gold-dark transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }
  
  // Get related products
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="pt-16 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="py-4">
          <ol className="flex text-sm">
            <li className="mr-2">
              <Link to="/" className="text-gray-500 hover:text-gold">Home</Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="mr-2">
              <Link 
                to={`/category/${product.category}`} 
                className="text-gray-500 hover:text-gold capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-jewelry-primary">{product.name}</li>
          </ol>
        </nav>
        
        <Link to="/category/all" className="inline-flex items-center text-gray-600 hover:text-gold mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row -mx-4">
          {/* Product Gallery */}
          <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="mb-4 overflow-hidden rounded-lg bg-jewelry-secondary">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-auto"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
                <ZoomIn size={20} className="text-gray-600" />
              </button>
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded overflow-hidden border-2 ${
                      selectedImage === index ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2 px-4">
            {/* Status badges */}
            <div className="flex space-x-2 mb-3">
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
            
            <h1 className="font-serif text-3xl text-jewelry-primary mb-2">{product.name}</h1>
            <p className="text-2xl font-medium text-jewelry-primary mb-4">
              {formatCurrency(product.price)}
            </p>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-jewelry-primary mb-2">Product Details</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {product.metal && (
                  <li className="flex items-start">
                    <span className="font-medium w-24">Metal:</span>
                    <span>{product.metal}</span>
                  </li>
                )}
                {product.stone && (
                  <li className="flex items-start">
                    <span className="font-medium w-24">Stone:</span>
                    <span>{product.stone}</span>
                  </li>
                )}
                {product.weight && (
                  <li className="flex items-start">
                    <span className="font-medium w-24">Weight:</span>
                    <span>{product.weight}</span>
                  </li>
                )}
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Check size={16} className="text-green-600 mr-2" />
                <span className="text-green-600 text-sm">In Stock</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Quantity:</span>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center bg-gold hover:bg-gold-dark text-jewelry-primary px-6 py-3 rounded transition"
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
              
              <button
                onClick={handleWishlist}
                className={`px-4 py-3 rounded border ${
                  isInWishlist(product.id)
                    ? 'border-red-500 text-red-500'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400'
                } transition`}
                aria-label="Add to wishlist"
              >
                <Heart size={18} className={isInWishlist(product.id) ? 'fill-red-500' : ''} />
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2271/2271113.png" alt="Free Shipping" className="w-6 h-6 mr-3" />
                  <span className="text-gray-700 text-sm">Free Shipping on orders over $100</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/3176/3176382.png" alt="30-Day Returns" className="w-6 h-6 mr-3" />
                  <span className="text-gray-700 text-sm">30-Day Returns</span>
                </div>
                <div className="flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/3449/3449810.png" alt="Authenticity" className="w-6 h-6 mr-3" />
                  <span className="text-gray-700 text-sm">Authenticity Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-jewelry-primary mb-8">You Might Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;