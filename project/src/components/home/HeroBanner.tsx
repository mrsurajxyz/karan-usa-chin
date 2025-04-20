import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="5.jpghttps://images.pexels.com/photos/31715747/pexels-photo-31715747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Luxury jewelry collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-lg animate-slide-up">
          <span className="inline-block text-gold font-medium mb-2">New Collection</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Timeless Elegance For Every Occasion
          </h1>
          <p className="text-white text-lg opacity-90 mb-8">
            Discover our exquisite collection of handcrafted jewelry, designed to celebrate life's precious moments.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/category/all"
              className="px-8 py-3 bg-gold text-jewelry-primary font-medium rounded hover:bg-gold-dark transition"
            >
              Shop Now
            </Link>
            <Link
              to="/collections/new"
              className="px-8 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-jewelry-primary transition"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;