"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, CheckCircle } from 'lucide-react';

export const HowToUse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Placeholder images - replace with your actual image URLs
  const slides = [
    {
      id: 1,
      image: "/first.png",
      description: [
        "Open Extensions",
        `Search For "Forge Code Refactor"`,
      ]
    },
    {
      id: 2,
      image: "/second.png",
      description: [
        "Click On Install",
      ]
    },
    {
      id: 3,
      image: "/third.png",
      description: [
        "Open Root Folder Of Your Project",
        "Right click On Files Section ",
        "Click On Forge It"
      ]
    },
    {
      id: 4,
      image: "/fourth.png",
      description: [
        "Paste Your Api Key",
      ]
    },
    {
      id: 5,
      image: "/fifth.png",
      description: [
        "Click On Refactor Button",
      ]
    },
    {
        id: 6,
        image: "/sixth.png",
        description: [
          "Always Reload After Any Operation",
        ]
      }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              How To Use
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to transform your codebase with AI-powered refactoring
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl border border-gray-700/30 backdrop-blur-sm overflow-hidden">
          
          {/* Controls Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700/30">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="bg-blue-600/20 hover:bg-blue-600/30 p-2 rounded-lg transition-all duration-300 border border-blue-500/30"
              >
                {isAutoPlay ? (
                  <Pause className="w-5 h-5 text-blue-400" />
                ) : (
                  <Play className="w-5 h-5 text-blue-400" />
                )}
              </button>
              <span className="text-sm text-gray-400">
                {isAutoPlay ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
            
            <div className="text-sm text-gray-400">
              {currentSlide + 1} of {slides.length}
            </div>
          </div>

          {/* Image Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto max-h-96 object-contain bg-gray-900/20"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Step Information */}
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </h3>

            {/* Description Points */}
            <div className="grid gap-4 max-w-4xl mx-auto">
              {slides[currentSlide].description.map((point, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-4 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 pb-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-400 to-purple-600 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

  
      </div>
    </div>
  );
};