import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedSection from '../components/home/FeaturedSection';
import CategoriesSection from '../components/home/CategoriesSection';
import PriceTicker from '../components/home/PriceTicker';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <PriceTicker />
      <HeroBanner />
      
      {/* Trust Badges */}
      <div className="py-8 bg-jewelry-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-jewelry-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <h3 className="font-medium text-jewelry-primary">Free Shipping</h3>
              <p className="text-sm text-gray-500">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-jewelry-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
              </svg>
              <h3 className="font-medium text-jewelry-primary">30-Day Returns</h3>
              <p className="text-sm text-gray-500">Hassle-free returns</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-jewelry-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-medium text-jewelry-primary">Secure Payment</h3>
              <p className="text-sm text-gray-500">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-2 text-jewelry-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="font-medium text-jewelry-primary">Authenticity</h3>
              <p className="text-sm text-gray-500">Guaranteed genuine</p>
            </div>
          </div>
        </div>
      </div>
      
      <CategoriesSection />
      <FeaturedSection />
      
      {/* About/Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <span className="text-gold font-medium">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4 text-jewelry-primary">
                Crafted with Passion Since 1998
              </h2>
              <p className="text-gray-600 mb-4">
                At Lumina, we believe that jewelry is more than just an accessory—it's a statement of individuality, 
                a celebration of special moments, and a legacy to be passed down through generations.
              </p>
              <p className="text-gray-600 mb-6">
                Each piece in our collection is meticulously handcrafted by our team of skilled artisans, using only 
                the finest ethically sourced materials and gemstones. We take pride in our commitment to exceptional 
                quality, sustainability, and timeless design.
              </p>
              <button className="px-6 py-2 border border-jewelry-primary text-jewelry-primary rounded hover:bg-jewelry-primary hover:text-white transition">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="2.jpg" 
                alt="Jewelry crafting" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Gallery */}
      <section className="py-12 bg-jewelry-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl mb-3 text-jewelry-primary">Follow Us on Instagram</h2>
            <p className="text-gray-600">@Theusachain</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <img src="1.jpg" className="w-full h-52 object-cover hover:opacity-90 transition" alt="Instagram post" />
            <img src="2.jpg" className="w-full h-52 object-cover hover:opacity-90 transition" alt="Instagram post" />
            <img src="3.jpg" className="w-full h-52 object-cover hover:opacity-90 transition" alt="Instagram post" />
            <img src="4.jpg" className="w-full h-52 object-cover hover:opacity-90 transition" alt="Instagram post" />
            <img src="11.jpg" className="w-full h-52 object-cover hover:opacity-90 transition" alt="Instagram post" />
            <img src="8.jpg" className="w-full h-52 object-cover hover:opacity-90 transition" alt="Instagram post" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;