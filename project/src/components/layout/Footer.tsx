import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jewelry-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl mb-6 text-gold">The usa chain</h3>
            <p className="text-gray-300 mb-4">
            "Usha Hallmarking & HUID Center is a BIS-certified service provider offering reliable, accurate, and fast hallmarking and HUID registration services for gold jewelry manufacturers, wholesalers, and retailers in Kolkata."
Services:

            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-gold transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Shopping</h4>
            <ul className="space-y-3">
              <li><Link to="/category/all" className="text-gray-300 hover:text-gold transition">All Jewelry</Link></li>
              <li><Link to="/category/rings" className="text-gray-300 hover:text-gold transition">Rings</Link></li>
              <li><Link to="/category/necklaces" className="text-gray-300 hover:text-gold transition">Necklaces</Link></li>
              <li><Link to="/category/earrings" className="text-gray-300 hover:text-gold transition">Earrings</Link></li>
              <li><Link to="/category/bracelets" className="text-gray-300 hover:text-gold transition">Bracelets</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-300 hover:text-gold transition">New Arrivals</Link></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-gold transition">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-gold transition">Shipping & Returns</Link></li>
              <li><Link to="/sizing" className="text-gray-300 hover:text-gold transition">Sizing Guide</Link></li>
              <li><Link to="/care" className="text-gray-300 hover:text-gold transition">Jewelry Care</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button className="bg-gold text-jewelry-primary px-4 py-2 rounded-r hover:bg-gold-dark transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Theusachain. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-gold text-sm transition">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-gold text-sm transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;