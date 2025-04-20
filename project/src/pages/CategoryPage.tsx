import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products, getProductsByCategory } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Product } from '../types';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedMetals, setSelectedMetals] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    let filtered = category === 'all' ? products : getProductsByCategory(category || '');
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply metal filter
    if (selectedMetals.length > 0) {
      filtered = filtered.filter(product => 
        product.metal && selectedMetals.some(metal => product.metal?.includes(metal))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.filter(p => p.new).concat(filtered.filter(p => !p.new));
        break;
      case 'featured':
      default:
        filtered = filtered.filter(p => p.featured)
          .concat(filtered.filter(p => !p.featured));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [category, sortBy, priceRange, selectedMetals]);
  
  // Extract all unique metals for filter
  const availableMetals = Array.from(
    new Set(
      products
        .map(p => p.metal)
        .filter(Boolean) as string[]
    )
  );
  
  const toggleMetal = (metal: string) => {
    if (selectedMetals.includes(metal)) {
      setSelectedMetals(selectedMetals.filter(m => m !== metal));
    } else {
      setSelectedMetals([...selectedMetals, metal]);
    }
  };
  
  const clearFilters = () => {
    setPriceRange([0, 5000]);
    setSelectedMetals([]);
    setSortBy('featured');
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl text-center text-jewelry-primary mb-2 capitalize">
          {category === 'all' ? 'All Jewelry' : category}
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Discover our collection of exquisite {category === 'all' ? 'jewelry' : category} pieces
        </p>
        
        <div className="flex flex-col md:flex-row">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded"
            >
              <div className="flex items-center">
                <Filter size={18} className="mr-2" />
                <span>Filters</span>
              </div>
              <ChevronDown 
                size={18} 
                className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>
          
          {/* Filter Sidebar */}
          <div 
            className={`w-full md:w-64 mr-0 md:mr-8 ${
              showFilters ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="bg-jewelry-secondary p-5 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium text-jewelry-primary flex items-center">
                  <SlidersHorizontal size={18} className="mr-2" />
                  Filters
                </h2>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-gold hover:underline"
                >
                  Clear All
                </button>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-sm text-jewelry-primary mb-3">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-xs">${priceRange[0]}</span>
                  <span className="text-gray-600 text-xs">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              {/* Metal Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-sm text-jewelry-primary mb-3">Metal</h3>
                <div className="space-y-2">
                  {availableMetals.map((metal, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedMetals.includes(metal)}
                        onChange={() => toggleMetal(metal)}
                        className="mr-2 h-4 w-4 accent-gold"
                      />
                      <span className="text-gray-700 text-sm">{metal}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600 text-sm">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center">
                <span className="text-gray-600 text-sm mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-jewelry-primary mb-2">No products found</p>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 text-gold border border-gold rounded hover:bg-gold hover:text-white transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;