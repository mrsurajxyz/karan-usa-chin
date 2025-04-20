import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-jewelry-primary">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our exquisite collections of fine jewelry designed for every occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.name.toLowerCase()}`}
              className="group block overflow-hidden rounded-lg relative"
            >
              <div className="relative pb-[125%] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition-opacity"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-serif text-2xl mb-2">{category.name}</h3>
                <span className="text-white text-sm">{category.itemCount} items</span>
                <span className="mt-4 px-4 py-2 border border-white text-white text-sm rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;