"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, CheckCircle, Key, ExternalLink, CreditCard, Users } from 'lucide-react';

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

        {/* Features Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            How to use three buttons in the extension
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Refactor Feature */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-6">
                <img
                  src="/refactor.png"
                  alt="Code Refactoring"
                  className="w-full h-32 object-contain rounded-xl bg-gray-900/20"
                />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Refactor
                </span>
              </h4>
              <p className="text-gray-400 text-center mb-6 leading-relaxed">
              Intelligently restructure and improve your existing code while maintaining functionality. Perfect for cleaning up legacy code and implementing best practices with AI-powered analysis.              </p>
              <div className="space-y-3">
                {[
                  "Select model",
                  "Paste yout api key",
                  "Select files",
                  "Click on refactor button"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Generate Feature */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="mb-6">
                <img
                  src="/generate.png"
                  alt="Code Generation"
                  className="w-full h-32 object-contain rounded-xl bg-gray-900/20"
                />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Generate
                </span>
              </h4>
              <p className="text-gray-400 text-center mb-6 leading-relaxed">
              Create new code components, functions, or entire modules from natural language descriptions. Accelerate development with AI-powered code creation that follows your project patterns.              </p>
              <div className="space-y-3">
                {[
                  "Select model",
                  "Paste yout api key",
                  "Selecting files is optional",
                  "Give prompt and press generate"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimize Feature */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-6 hover:border-green-500/30 transition-all duration-300">
              <div className="mb-6">
                <img
                  src="/optimize.png"
                  alt="Code Optimization"
                  className="w-full h-32 object-contain rounded-xl bg-gray-900/20"
                />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent">
                  Optimize
                </span>
              </h4>
              <p className="text-gray-400 text-center mb-6 leading-relaxed">
              Enhance code performance, reduce complexity, and improve efficiency. Automatically identify bottlenecks and suggest performance improvements for individual files.              </p>
              <div className="space-y-3">
                {[
                  "Select model",
                  "Paste yout api key",
                  "Select any one file",
                  "Press optimize"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* API Key Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Get Your API Key
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your plan and get your API key to start using the extension
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Users */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                    Free Users
                  </span>
                </h4>
                <p className="text-gray-400 text-lg">Get started with OpenRouter</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <Key className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Step 1: Visit OpenRouter</p>
                    <p className="text-gray-400 text-sm">Go to OpenRouter LLM platform to get your free API key</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Step 2: Generate API Key</p>
                    <p className="text-gray-400 text-sm">Create your account and generate your API key</p>
                  </div>
                </div>
                

                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Step 3: Use in Extension</p>
                    <p className="text-gray-400 text-sm">Copy your API key from the website and paste it in the extension's API Key tab</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paid Users */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 backdrop-blur-sm p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <CreditCard className="w-10 h-10 text-purple-400" />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Paid Users
                  </span>
                </h4>
                <p className="text-gray-400 text-lg">Premium features & support</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <Key className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Step 1: Navigate to API Tab</p>
                    <p className="text-gray-400 text-sm">Go to the API Key tab in this page</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Step 2: Generate Your Key</p>
                    <p className="text-gray-400 text-sm">Click generate to create your premium API key</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <Key className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Step 3: Use in Extension</p>
                    <p className="text-gray-400 text-sm">Copy and paste your API key in the extension</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Steps to Use Extension */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Steps to Use Extension
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Watch these videos to see the extension in action and learn how to use it effectively
            </p>
          </div>

          <div className="space-y-16">
            {/* How-to Video */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl border border-gray-700/30 backdrop-blur-sm p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Installation & Setup Guide
                </span>
              </h4>
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-700/50">
                  <video
                    controls
                    className="w-full h-auto"
                    poster="/video-placeholder.jpg"
                  >
                    <source src="/how.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-gray-400 text-center mt-4">
                  Complete walkthrough of installing and setting up the Forge Code Refactor extension
                </p>
              </div>
            </div>

            {/* Demo Section */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Demo
                </span>
              </h4>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See the extension's powerful features in action with real code examples
              </p>
            </div>

            {/* Live Demo Video */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl border border-gray-700/30 backdrop-blur-sm p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent">
                  Live Demo
                </span>
              </h4>
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-700/50">
                  <video
                    controls
                    className="w-full h-auto"
                    poster="/demo-placeholder.jpg"
                  >
                    <source src="/live.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-gray-400 text-center mt-4">
                  Live demonstration of refactoring, generating, and optimizing code with the extension
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};