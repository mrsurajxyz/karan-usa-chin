import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 1499.99,
    category: "rings",
    description: "An elegant diamond solitaire ring set in 18k white gold, featuring a stunning 1-carat diamond with excellent clarity and cut.",
    images: [
      "2.jpg",
      "4.jpg"
    ],
    featured: true,
    metal: "18K White Gold",
    stone: "Diamond, 1 carat",
    weight: "4g",
    inStock: true
  },
  {
    id: 2,
    name: "Pearl Pendant Necklace",
    price: 899.99,
    category: "necklaces",
    description: "A luxurious freshwater pearl pendant necklace with 14k gold chain, perfectly balanced for everyday elegance.",
    images: [
      "6.jpg",
      "8.jpg"
    ],
    bestseller: true,
    metal: "14K Yellow Gold",
    stone: "Freshwater Pearl",
    weight: "8g",
    inStock: true
  },
  {
    id: 3,
    name: "Sapphire Drop Earrings",
    price: 1299.99,
    category: "earrings",
    description: "Beautiful sapphire drop earrings featuring 2 carats of deep blue natural sapphires surrounded by pavé diamonds.",
    images: [
      "11.jpg", 
      "12.jpg"
    ],
    new: true,
    metal: "18K White Gold",
    stone: "Blue Sapphire, 2 carats total",
    weight: "5.2g",
    inStock: true
  },
  {
    id: 4,
    name: "Gold Tennis Bracelet",
    price: 2199.99,
    category: "bracelets",
    description: "A classic diamond tennis bracelet featuring 3 carats of brilliant round diamonds set in 14k yellow gold.",
    images: [
      "11.jpg",
      "2.jpg"
    ],
    featured: true,
    metal: "14K Yellow Gold",
    stone: "Diamonds, 3 carats total",
    weight: "15g",
    inStock: true
  },
  {
    id: 5,
    name: "Emerald Halo Ring",
    price: 1799.99,
    category: "rings",
    description: "A stunning emerald ring featuring a 1.5-carat center stone surrounded by a halo of brilliant diamonds.",
    images: [
      "https://images.pexels.com/photos/10488619/pexels-photo-10488619.jpeg",
      "https://images.pexels.com/photos/7799925/pexels-photo-7799925.jpeg"
    ],
    new: true,
    metal: "18K White Gold",
    stone: "Emerald, 1.5 carats",
    weight: "5.5g",
    inStock: true
  },
  {
    id: 6,
    name: "Rose Gold Chain Necklace",
    price: 599.99,
    category: "necklaces",
    description: "A delicate rose gold chain necklace with a modern design, perfect for layering or wearing alone.",
    images: [
      "https://images.pexels.com/photos/10941781/pexels-photo-10941781.jpeg",
      "https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg"
    ],
    bestseller: true,
    metal: "14K Rose Gold",
    weight: "3.8g",
    inStock: true
  },
  {
    id: 7,
    name: "Diamond Stud Earrings",
    price: 999.99,
    category: "earrings",
    description: "Classic diamond stud earrings featuring a pair of round brilliant diamonds totaling 1 carat in weight.",
    images: [
      "https://images.pexels.com/photos/10685307/pexels-photo-10685307.jpeg",
      "https://images.pexels.com/photos/12815499/pexels-photo-12815499.jpeg"
    ],
    featured: true,
    metal: "18K White Gold",
    stone: "Diamonds, 1 carat total",
    weight: "2g",
    inStock: true
  },
  {
    id: 8,
    name: "Silver Charm Bracelet",
    price: 349.99,
    category: "bracelets",
    description: "A sterling silver charm bracelet featuring five unique handcrafted charms representing love and prosperity.",
    images: [
      "10.jpg", "11.jpg"    ],
    metal: "Sterling Silver",
    weight: "12g",
    inStock: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};