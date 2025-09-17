import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Sun, Clock, EyeOff, Shield, Baby, Droplets, Award, Leaf, Moon, Heart, Flower } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: "Reduces Dark Spots & Pigmentation",
    description: "Powered by Alpha Arbutin, Saffron Oil & Vitamin B3 to fade marks and even skin tone."
  },
  {
    icon: Sun,
    title: "Brightens Skin Tone",
    description: "Restores natural color to match the nose-tip tone (the true skin tone)."
  },
  {
    icon: Clock,
    title: "Anti-Aging Care",
    description: "Vitamins A, C, and E reduce fine lines & wrinkles while promoting youthful skin."
  },
  {
    icon: EyeOff,
    title: "Under-Eye Dark Circles",
    description: "Night repair action targets dullness and puffiness around the eyes."
  },
  {
    icon: Shield,
    title: "Sun Protection & Damage Repair",
    description: "With Zinc Oxide + Vitamin E to protect and heal sun-damaged skin."
  },
  {
    icon: Baby,
    title: "Baby Rash Relief",
    description: "Gentle formulation to soothe and heal diaper rashes safely."
  },
  {
    icon: Droplets,
    title: "Hydration & Softness",
    description: "Natural wax, glycerin, and almond nourish deeply for lasting moisture."
  },
  {
    icon: Award,
    title: "Visible Results",
    description: "Within 15 days at night and 30 days with daily use - guaranteed improvement."
  },
  {
    icon: Leaf,
    title: "Natural & Safe",
    description: "Made with natural ingredients, free from parabens, sulfates, and harsh chemicals."
  },
  {
    icon: Moon,
    title: "Day & Night Care",
    description: "Protects during the day and repairs at night for comprehensive skincare."
  },
  {
    icon: Heart,
    title: "Multi-Purpose Formula",
    description: "Anti-Aging + Brightening + Rash Relief in one cream for the whole family."
  },
  {
    icon: Flower,
    title: "Luxurious Saffron Fragrance",
    description: "Enjoy a spa-like experience with our premium saffron-scented formula."
  }
];

const Benefits = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      id="benefits" 
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            {t('benefits.title')} <span className="gradient-text">{t('benefits.brandName')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">{t('benefits.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-amber-400/50 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="sm:w-7 sm:h-7 text-black" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {t(`benefits.benefit${index + 1}.title`)}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {t(`benefits.benefit${index + 1}.description`)}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 lg:mt-16 px-4">
          <button
            onClick={() => {
              const ctaSection = document.getElementById('cta') || document.querySelector('section:last-of-type');
              ctaSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 transform hover:scale-105"
          >
            {t('benefits.experienceButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;