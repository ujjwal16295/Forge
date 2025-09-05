import React from 'react';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-gray-700">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm">Simple, Transparent Pricing</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Plan</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start free and scale as your team grows. All plans include our core AI code review features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Free Plan - Available */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-1">$0</div>
                <p className="text-gray-400 mb-8">Perfect for trying out Forge</p>
                
                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>3 code reviews per day</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Basic refactoring</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Code cleanup</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Git branch creation</span>
                  </div>
                </div>
                
                <a 
                  href="/api-key"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Pro Plan - Coming Soon */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Coming Soon
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-purple-400 mr-2" />
                  <h3 className="text-2xl font-bold">Pro</h3>
                </div>
                <div className="text-4xl font-bold mb-1">
                  <span className="text-white">$</span>
                  <span className="bg-gradient-to-r text-white bg-clip-text">5</span>
                </div>
                <p className="text-gray-400 mb-8">For growing development teams</p>
                
                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Unlimited code reviews</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Advanced refactoring</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Custom coding standards</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Team collaboration</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-700 cursor-not-allowed px-6 py-3 rounded-lg font-semibold text-gray-400">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
                <h4 className="font-semibold mb-2">When will Pro be available?</h4>
                <p className="text-gray-400 text-sm">We're actively developing the Pro plan. Join our free tier to be notified when it launches!</p>
              </div>
              
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
                <h4 className="font-semibold mb-2">What programming languages are supported?</h4>
                <p className="text-gray-400 text-sm">Forge supports currently Next.js and React.js.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;