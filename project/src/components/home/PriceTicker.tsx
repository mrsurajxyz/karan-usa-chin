import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetalPrice {
  name: string;
  price: number;
  change: number;
}

const PriceTicker: React.FC = () => {
  // In a real app, we'd fetch this data from an API
  const [prices, setPrices] = useState<MetalPrice[]>([
    { name: 'Gold (oz)', price: 1937.8, change: 2.5 },
    { name: 'Silver (oz)', price: 24.12, change: -0.3 },
    { name: 'Platinum (oz)', price: 985.4, change: 1.2 },
    { name: 'Palladium (oz)', price: 2135.2, change: -1.5 },
  ]);

  // Simulate price updates (in real app, this would be an API call on a timer)
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(currentPrices => 
        currentPrices.map(metal => ({
          ...metal,
          price: Math.round((metal.price + (Math.random() * 2 - 1) * 0.5) * 100) / 100,
          change: Math.round((metal.change + (Math.random() * 0.4 - 0.2)) * 100) / 100
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-jewelry-primary text-white py-2 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 animate-[slide_20s_linear_infinite]">
          {prices.map((metal, index) => (
            <div key={index} className="flex items-center space-x-2 px-4">
              <span className="font-medium">{metal.name}:</span>
              <span>${metal.price.toFixed(2)}</span>
              <span 
                className={`flex items-center ${
                  metal.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {metal.change >= 0 ? (
                  <TrendingUp size={16} className="mr-1" />
                ) : (
                  <TrendingDown size={16} className="mr-1" />
                )}
                {metal.change >= 0 ? '+' : ''}{metal.change.toFixed(2)}%
              </span>
            </div>
          ))}
          {/* Duplicate items to create a seamless loop */}
          {prices.map((metal, index) => (
            <div key={`dup-${index}`} className="flex items-center space-x-2 px-4">
              <span className="font-medium">{metal.name}:</span>
              <span>${metal.price.toFixed(2)}</span>
              <span 
                className={`flex items-center ${
                  metal.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {metal.change >= 0 ? (
                  <TrendingUp size={16} className="mr-1" />
                ) : (
                  <TrendingDown size={16} className="mr-1" />
                )}
                {metal.change >= 0 ? '+' : ''}{metal.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;