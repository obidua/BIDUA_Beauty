import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    age: 34,
    location: "Mumbai, India",
    rating: 5,
    text: "I've tried countless face creams, but nothing compares to BIDUA Radiance 15. The saffron oil formula completely eliminated my dark circles in 30 days!",
    image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    name: "Anjali Patel",
    age: 42,
    location: "Delhi, India",
    rating: 5,
    text: "The natural ingredients work amazingly! My husband and I both use it. Even helped with my baby's diaper rash - so gentle and effective!",
    image: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    name: "Kavya Reddy",
    age: 38,
    location: "Bangalore, India",
    rating: 5,
    text: "100% recovery on my dark spots! I apply it thick at night as recommended and the fairness results are unbeatable. Worth every penny!",
    image: "https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-r from-amber-400/15 to-yellow-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-56 h-56 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">Join thousands of satisfied customers who've transformed their skin with BIDUA Beauty</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 lg:p-8 hover:border-amber-400/50 transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote size={32} className="sm:w-12 sm:h-12 text-amber-400/20 absolute top-4 right-4 sm:top-6 sm:right-6" />

                {/* Customer Info */}
                <div className="flex items-center mb-4 lg:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-400/50 mr-3 sm:mr-4 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Age {testimonial.age} • {testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 lg:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="sm:w-5 sm:h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/15 via-yellow-500/15 to-amber-400/15 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 lg:mt-16 px-4">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 rounded-full px-6 sm:px-8 py-4 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="sm:w-6 sm:h-6 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-white text-base sm:text-lg font-semibold">4.9/5 Average Rating</span>
            <span className="text-gray-300 text-sm sm:text-base">from 5,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;