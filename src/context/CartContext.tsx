import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PRODUCT_IMAGES } from '../data/productImages';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
  type?: 'b2c' | 'b2b';
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getShippingCost: () => number;
  getSubtotal: () => number;
  getB2bSubtotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { 
          ...item, 
          quantity: 1,
          image: item.image || PRODUCT_IMAGES[0], // Fallback to first image
          type: item.type || 'b2c' // Default to 'b2c' if not specified
        }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getB2bSubtotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.type === 'b2b') {
        return total + (item.price * item.quantity);
      }
      return total;
    }, 0);
  };

  const getShippingCost = () => {
    const totalItems = getTotalItems();
    
    if (totalItems === 0) return 0;
    if (totalItems >= 1 && totalItems <= 3) return 100;
    if (totalItems >= 4 && totalItems <= 10) return 200;
    if (totalItems >= 11 && totalItems <= 20) return 300;
    if (totalItems >= 21 && totalItems <= 40) return 400;
    if (totalItems >= 41 && totalItems <= 50) return 500;
    if (totalItems >= 51 && totalItems <= 100) return 10000;
    if (totalItems >= 101) return totalItems * 50;
    
    return 0;
  };

  const getTotalPrice = () => {
    return getSubtotal() + getShippingCost();
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getShippingCost,
    getSubtotal,
    getB2bSubtotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};