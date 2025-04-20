import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../context/CartContext';

const CartSummary: React.FC = () => {
  const { getCartTotal } = useCart();
  
  const cartTotal = getCartTotal();
  const shipping = cartTotal > 100 ? 0 : 9.99;
  const taxes = cartTotal * 0.07; // Example tax calculation (7%)
  const orderTotal = cartTotal + shipping + taxes;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-jewelry-primary mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatCurrency(cartTotal)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : formatCurrency(shipping)}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Taxes (estimated)</span>
          <span className="font-medium">{formatCurrency(taxes)}</span>
        </div>
        
        {shipping === 0 && (
          <div className="text-green-600 text-xs mt-2">
            Free shipping on orders over $100
          </div>
        )}
        
        <div className="my-4 border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="text-jewelry-primary font-medium">Order total</span>
            <span className="text-jewelry-primary font-bold">
              {formatCurrency(orderTotal)}
            </span>
          </div>
        </div>
      </div>
      
      <Link
        to="/checkout"
        className="mt-6 w-full block text-center bg-gold hover:bg-gold-dark text-jewelry-primary font-medium py-3 px-4 rounded transition"
      >
        Proceed to Checkout
      </Link>
      
      <div className="mt-4">
        <Link 
          to="/category/all"
          className="block text-center text-jewelry-primary hover:text-gold"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;