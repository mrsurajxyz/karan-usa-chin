import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      {/* Product image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Product details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-jewelry-primary">
          <h3>{product.name}</h3>
          <p className="ml-4">{formatCurrency(product.price * quantity)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {product.metal}{product.stone ? `, ${product.stone}` : ''}
        </p>
        
        {/* Quantity control */}
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            <Minus size={14} />
          </button>
          
          <span className="mx-2 w-8 text-center">{quantity}</span>
          
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
          
          <div className="ml-auto">
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="Remove item"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;