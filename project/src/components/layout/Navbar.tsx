import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const { getCartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-semibold text-jewelry-primary">The usa chain</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/category/all" className="text-jewelry-primary hover:text-gold transition">All Jewelry</Link>
          <Link to="/category/rings" className="text-jewelry-primary hover:text-gold transition">Rings</Link>
          <Link to="/category/necklaces" className="text-jewelry-primary hover:text-gold transition">Necklaces</Link>
          <Link to="/category/earrings" className="text-jewelry-primary hover:text-gold transition">Earrings</Link>
          <Link to="/category/bracelets" className="text-jewelry-primary hover:text-gold transition">Bracelets</Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-jewelry-primary hover:text-gold transition">
            <Search size={20} />
          </button>
          
          <Link to="/wishlist" className="text-jewelry-primary hover:text-gold transition">
            <Heart size={20} />
          </Link>
          
          <Link to="/account" className="text-jewelry-primary hover:text-gold transition">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="text-jewelry-primary hover:text-gold transition relative">
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden text-jewelry-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/category/all" 
                className="text-jewelry-primary hover:text-gold transition py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                All Jewelry
              </Link>
              <Link 
                to="/category/rings" 
                className="text-jewelry-primary hover:text-gold transition py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Rings
              </Link>
              <Link 
                to="/category/necklaces" 
                className="text-jewelry-primary hover:text-gold transition py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Necklaces
              </Link>
              <Link 
                to="/category/earrings" 
                className="text-jewelry-primary hover:text-gold transition py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Earrings
              </Link>
              <Link 
                to="/category/bracelets" 
                className="text-jewelry-primary hover:text-gold transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Bracelets
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
