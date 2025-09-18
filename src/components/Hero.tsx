import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductImageSlider from './ProductImageSlider';
import { PRODUCT_IMAGES, PRODUCT_ALT_TEXT } from '../data/productImages';

const Hero = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const product = {
      id: 'luxeglow-face-cream',
      name: 'BIDUA Radiance 15',
      price: 1499,
      originalPrice: 4999,
      image: PRODUCT_IMAGES[0]
    };
    addToCart(product);
    navigate('/cart');
  };
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-amber-400/5 to-yellow-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-400">
              <Sparkles size={16} className="sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Premium Skincare</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              BIDUA
              <span className="block gradient-text">RADIANCE 15</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300">True Glow in 15 Days</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">Reduces dark spots, repairs sun damage, and restores natural skin tone with our revolutionary formula. Experience visible results in just 15 days with premium saffron oil and natural ingredients designed for all skin types.</p>

            <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-4 text-amber-400">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" />
                ))}
              </div>
              <span className="text-white text-sm sm:text-base">4.9/5 from 2,847 reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <button 
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex flex-col items-center">
                  <span className="text-xs line-through opacity-70">₹4,999</span>
                  <span>Order Now - ₹1,499</span>
                </span>
              </button>
              <button 
                onClick={() => {
                  const benefitsSection = document.getElementById('benefits');
                  benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:border-amber-400 hover:text-amber-400 transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative flex justify-center order-1 lg:order-2 px-4 sm:px-6 lg:px-0 py-8 sm:py-12 lg:py-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-white/20 rounded-full blur-2xl"></div>
              
              {/* Product Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl overflow-hidden border border-amber-400/20 p-3 sm:p-4">
                {/* Product Image Slider */}
                <ProductImageSlider
                  images={PRODUCT_IMAGES}
                  alt={PRODUCT_ALT_TEXT}
                  className="w-full h-full"
                  showDots={true}
                  autoPlay={true}
                  autoPlayInterval={4000}
                />

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-amber-400 rounded-full flex items-center justify-center">
                  <Sparkles size={12} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/2 -left-3 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400/60 rounded-full"></div>
                <div className="absolute top-1/4 -right-4 sm:-right-8 w-2 h-2 sm:w-3 sm:h-3 bg-amber-300/80 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-amber-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;