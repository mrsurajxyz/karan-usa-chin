import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, clearCart } = useCart();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl text-center text-jewelry-primary mb-8">Shopping Cart</h1>
        
        {items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-jewelry-primary">
                    {items.length} {items.length === 1 ? 'Item' : 'Items'}
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-500 hover:text-red-500"
                  >
                    Clear Cart
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {items.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:w-1/3">
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-8 bg-jewelry-secondary rounded-full mb-6">
              <ShoppingBag size={48} className="text-gold" />
            </div>
            <h2 className="text-2xl font-medium text-jewelry-primary mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any jewelry to your cart yet.</p>
            <Link 
              to="/category/all"
              className="px-6 py-3 bg-gold text-jewelry-primary font-medium rounded hover:bg-gold-dark transition"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;