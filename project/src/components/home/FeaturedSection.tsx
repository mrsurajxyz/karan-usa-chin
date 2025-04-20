import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../product/ProductGrid';
import { getFeaturedProducts } from '../../data/products';

const FeaturedSection: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-jewelry-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-jewelry-primary">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          "Usha Hallmarking & HUID Center is a BIS-certified service provider offering reliable, accurate, and fast hallmarking and HUID registration services for gold jewelry manufacturers, wholesalers, and retailers in Kolkata."Services:

          </p>
        </div>
        
        <ProductGrid products={featuredProducts} columns={3} />
        
        <div className="text-center mt-12">
          <Link 
            to="/category/all" 
            className="inline-block px-8 py-3 border border-jewelry-primary text-jewelry-primary rounded hover:bg-jewelry-primary hover:text-white transition"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;