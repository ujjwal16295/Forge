import React, { useState, useEffect } from 'react';
import { Check, Star, Zap, ArrowRight, Crown, Loader2, LogIn, Infinity, Calendar, Trophy, Bot, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase'; // Adjust path as needed
import { initializePaddle } from "@paddle/paddle-js";

const Pricing = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPlan, setCurrentPlan] = useState('free'); // Default to free
  const [fetchingPlan, setFetchingPlan] = useState(false);
  const [upgradeLoading, setUpgradeLoading] = useState(false);
  const [paddle, setPaddle] = useState();
  
  // Control variable for Pro plan availability
  const isProPlanAvailable = true; // Pro plan is available

  const API_BASE_URL = 'https://smart-converter-backend-5zmh.onrender.com';

  // Initialize Paddle
  useEffect(() => {
    initializePaddle({
      environment: "production", // Change to "sandbox" for testing
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
      eventCallback: function(data) {
        if (data.name === "checkout.completed") {
          console.log("Checkout completed:", data);
          // Handle successful checkout
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        if (data.name === "checkout.closed") {
          console.log("Checkout closed:", data);
          // Reset loading state when checkout is closed
          setUpgradeLoading(false);
        }
      }
    }).then((paddleInstance) => setPaddle(paddleInstance));
  }, []);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error getting session:', error);
        } else {
          setUser(session?.user || null);
          if (session?.user) {
            await fetchUserPlan(session.user.email);
          }
        }
      } catch (error) {
        console.error('Session error:', error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        await fetchUserPlan(session.user.email);
      } else {
        setCurrentPlan('free'); // Reset to free when logged out
      }
      setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const fetchUserPlan = async (email) => {
    if (!email) return;
    
    setFetchingPlan(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/get-user-api-info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: email }),
      });

      const result = await response.json();
      
      if (result.success && result.data) {
        setCurrentPlan(result.data.plan?.toLowerCase() || 'free');
      } else {
        setCurrentPlan('free'); // Default to free if no plan found
      }
    } catch (error) {
      console.error('Error fetching user plan:', error);
      setCurrentPlan('free'); // Default to free on error
    } finally {
      setFetchingPlan(false);
    }
  };

  const handleUpgrade = async () => {
    // Check if user is logged in
    if (!user) {
      alert('Please log in to upgrade to Pro plan.');
      return;
    }

    if (!paddle) {
      alert('Payment system not initialized. Please try again.');
      return;
    }
  
    setUpgradeLoading(true);
    
    try {
      const userEmail = user.email;
      
      // Create subscription on backend
      const response = await fetch(`${API_BASE_URL}/api/payment/create-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userName: userEmail,
          plan: 'monthly' 
        }),
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to create subscription');
      }
      
      // Open Paddle checkout
      paddle.Checkout.open({
        items: [{ priceId: result.priceId, quantity: 1 }],
        settings: {
          displayMode: "overlay",
          theme: "light",
          successUrl: window.location.origin + "/api-key",
        },
        customData: {
          userName: userEmail,
          email: userEmail,
          planType: 'pro'
        }
      });
      
      // Don't set loading to false here as we want to keep it disabled until payment completes or modal closes
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
      setUpgradeLoading(false);
    }
  };

  const handlePlanClick = (planType) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      window.location.href = '/login';
      return;
    }

    if (currentPlan === planType) {
      // User is already on this plan, do nothing
      return;
    }
    
    if (planType === 'free') {
      // Redirect to API key page for free plan
      window.location.href = '/api-key';
    } else if (planType === 'pro' && isProPlanAvailable) {
      // Handle pro plan subscription logic
      handleUpgrade();
    }
  };

  const getPlanButton = (planType, planName) => {
    const isCurrentPlan = currentPlan === planType;
    const isPro = planType === 'pro';
    
    if (loading || fetchingPlan) {
      return (
        <div className="w-full bg-gray-700 px-6 py-3 rounded-lg font-semibold text-gray-400 animate-pulse">
          Loading...
        </div>
      );
    }

    if (isCurrentPlan) {
      return (
        <div className="w-full bg-green-600/20 border border-green-500/30 px-6 py-3 rounded-lg font-semibold text-green-400 flex items-center justify-center">
          <Check className="w-4 h-4 mr-2" />
          You're currently on this plan
        </div>
      );
    }

    if (isPro && !isProPlanAvailable) {
      return (
        <button 
          onClick={() => handlePlanClick(planType)}
          className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            !user 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transform hover:scale-105 cursor-pointer flex items-center justify-center'
              : 'bg-gray-700 cursor-not-allowed text-gray-400'
          }`}
          disabled={user}
        >
          {!user ? (
            <>
              <LogIn className="w-4 h-4 mr-2" />
              Login to Get Pro
            </>
          ) : (
            'Coming Soon'
          )}
        </button>
      );
    }

    // Show loading state when upgrade is in progress
    if (isPro && upgradeLoading) {
      return (
        <button 
          className="w-full bg-gradient-to-r from-purple-400 to-pink-400 cursor-not-allowed px-6 py-3 rounded-lg font-semibold flex items-center justify-center"
          disabled
        >
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </button>
      );
    }

    const buttonClass = isPro 
      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500';

    return (
      <button 
        onClick={() => handlePlanClick(planType)}
        className={`w-full ${buttonClass} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group`}
      >
        {!user && isPro ? (
          <>
            <LogIn className="w-4 h-4 mr-2" />
            Login to Upgrade
          </>
        ) : (
          <>
            {isPro ? 'Upgrade to Pro' : 'Get Started Free'}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    );
  };

  const getPlanCardClass = (planType) => {
    const isCurrentPlan = currentPlan === planType;
    const isPro = planType === 'pro';
    
    let baseClass = "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 relative";
    
    if (isCurrentPlan) {
      baseClass += " border-2 border-green-500/50 ring-2 ring-green-500/20";
    } else if (isPro) {
      baseClass += " border border-purple-500/30 transform scale-105";
    } else {
      baseClass += " border border-gray-700";
    }
    
    return baseClass;
  };

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
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Start free with Deepseek AI or upgrade to Pro for GPT-5-mini with enhanced capabilities.
            </p>

            {/* Authentication Status Indicator */}
            {!loading && (
              <div className="flex justify-center mb-8">
                {user ? (
                  <div className="bg-green-900/50 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Logged in as {user.email}</span>
                    {currentPlan === 'pro' && (
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs ml-2">PRO</span>
                    )}
                  </div>
                ) : (
                  <div className="bg-blue-900/50 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <LogIn className="w-4 h-4" />
                    <span>Login required to upgrade to Pro</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Free Plan */}
            <div className={getPlanCardClass('free')}>
              {currentPlan === 'free' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Current Plan
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-blue-400 mr-2" />
                  Free
                </h3>
                <div className="text-4xl font-bold mb-1">$0</div>
                <p className="text-gray-400 mb-4">Perfect for trying out Forge</p>
                
                {/* AI Model Badge */}
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center text-blue-400 font-semibold mb-1">
                    <Bot className="w-5 h-5 mr-2" />
                    Powered by Deepseek AI
                  </div>
                  <p className="text-xs text-gray-400">Advanced AI model for code refactoring</p>
                </div>
                
                {/* Usage Limit Badge */}
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-3 mb-6">
                  <div className="flex items-center justify-center text-gray-300 font-semibold">
                    <Infinity className="w-5 h-5 mr-2" />
                    3 Total Lifetime Uses
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Once exhausted, upgrade to Pro</p>
                </div>
                
                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Complete file replacement & refactoring</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>React/Next.js project detection</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Git branch-based workflow</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Hardcoded secret detection</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Dependency cleanup</span>
                  </div>
                </div>
                
                {getPlanButton('free', 'Free')}
              </div>
            </div>

            {/* Pro Plan */}
            <div className={getPlanCardClass('pro')}>
              {currentPlan === 'pro' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Current Plan
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-purple-400 mr-2" />
                  <h3 className="text-2xl font-bold">Pro</h3>
                </div>
                <div className="text-4xl font-bold mb-1">
                  <span className="text-white">$</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10</span>
                </div>
                <p className="text-xs text-gray-500 mb-1">exclusive of tax</p>
                <p className="text-gray-400 mb-4">For regular development work</p>
                
                {/* AI Model Badge */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center text-purple-300 font-semibold mb-1">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Powered by GPT-5-mini
                  </div>
                  <p className="text-xs text-gray-400">Premium AI model with enhanced capabilities</p>
                </div>
                
                {/* Usage Limit Badge */}
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-3 mb-6">
                  <div className="flex items-center justify-center text-purple-400 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    10 Uses Per Day
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Resets daily at midnight</p>
                </div>
                
                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Complete file replacement & refactoring</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>React/Next.js project detection</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Git branch-based workflow</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Hardcoded secret detection</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Dependency cleanup</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-300 font-semibold">Daily usage renewal</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-300 font-semibold">Enhanced AI performance</span>
                  </div>
                  <div className="flex items-center">
    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
    <span className="text-purple-300 font-semibold">Custom file generation</span>
  </div>
  <div className="flex items-center">
    <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
    <span className="text-purple-300 font-semibold">File optimization</span>
  </div>
                </div>
                
                {getPlanButton('pro', 'Pro')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;