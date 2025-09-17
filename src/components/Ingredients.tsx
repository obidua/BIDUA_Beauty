import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Droplets, FlaskRound as Flask, Flower, Sun, Nut, Candy as Candle, Leaf, Sparkles } from 'lucide-react';
import ProductImageSlider from './ProductImageSlider';
import { PRODUCT_IMAGES, PRODUCT_ALT_TEXT } from '../data/productImages';

const ingredients = [
  {
    icon: Droplets,
    name: "Ionized Water",
    description: "Deeply hydrates and improves absorption of nutrients. Helps detoxify skin and maintain pH balance."
  },
  {
    icon: Flask,
    name: "Vitamin A",
    description: "Boosts cell turnover, reduces wrinkles, and keeps skin smooth."
  },
  {
    icon: Flask,
    name: "Vitamin B Complex",
    description: "Repairs damaged skin, reduces pigmentation, and maintains an even skin tone."
  },
  {
    icon: Flask,
    name: "Vitamin B3 (Niacinamide)",
    description: "Brightens skin, reduces dark spots, and strengthens the skin barrier."
  },
  {
    icon: Flask,
    name: "Vitamin C",
    description: "Powerful antioxidant that brightens skin tone and protects against free radicals."
  },
  {
    icon: Flask,
    name: "Vitamin E",
    description: "Deep moisturizer, protects against sun damage, and reduces scars."
  },
  {
    icon: Flower,
    name: "Alpha Arbutin",
    description: "A natural skin-brightening agent that reduces melanin production, helping fade dark spots and patches safely."
  },
  {
    icon: Sun,
    name: "Zinc Oxide",
    description: "Provides natural sun protection, prevents UV damage, and soothes irritation."
  },
  {
    icon: Nut,
    name: "Walnut Shell Powder",
    description: "A natural exfoliant that gently removes dead skin cells and promotes skin renewal."
  },
  {
    icon: Nut,
    name: "Almond Powder",
    description: "Rich in Vitamin E & healthy fats, it nourishes, softens, and gives skin a healthy glow."
  },
  {
    icon: Candle,
    name: "Natural Wax",
    description: "Forms a protective layer on the skin to lock in moisture without clogging pores."
  },
  {
    icon: Flower,
    name: "Saffron Oil",
    description: "Premium saffron extract that helps reduce dark circles, promotes fairness, and provides natural glow."
  },
  {
    icon: Leaf,
    name: "All-Purpose Essential Oil Blend",
    description: "Nourishes, calms inflammation, and prevents infections."
  },
  {
    icon: Sparkles,
    name: "Saffron Fragrance",
    description: "Provides a luxurious, refreshing aroma that uplifts mood and adds a spa-like experience."
  }
];

const Ingredients = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      id="ingredients" 
      className="py-24 bg-gray-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-amber-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            {t('ingredients.title')} <span className="gradient-text">{t('ingredients.premium')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">{t('ingredients.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Ingredients List */}
          <div className="space-y-6 lg:space-y-8">
            {ingredients.map((ingredient, index) => {
              const Icon = ingredient.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 lg:space-x-6 p-4 lg:p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">{t(`ingredients.ingredient${index + 1}.name`)}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{t(`ingredients.ingredient${index + 1}.description`)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Product Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl"></div>
              
              {/* Product Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2 sm:p-4">
                  <ProductImageSlider
                    images={PRODUCT_IMAGES}
                    alt={PRODUCT_ALT_TEXT}
                    className="w-full h-48 sm:h-64 lg:h-80"
                    showDots={true}
                    autoPlay={false}
                  />
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-amber-400 rounded-full opacity-70"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-500 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 -left-3 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-60"></div>
                <div className="absolute top-1/4 -right-4 sm:-right-8 w-2 h-2 sm:w-3 sm:h-3 bg-amber-300 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;