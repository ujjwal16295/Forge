"use client"
import React, { useState, useEffect } from 'react';
import { Key, Copy, Trash2, Shield, Eye, EyeOff, RefreshCw, AlertCircle, CheckCircle, User, Crown, Zap, X, Clock, ExternalLink } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ApiKeyPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiKeyData, setApiKeyData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [copySuccess, setCopySuccess] = useState(false);

  // Check if plan is free
  const isFree = !apiKeyData || apiKeyData?.plan?.toLowerCase() === 'free';

  // Check authentication and redirect if not logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Session error:', error);
          window.location.href = '/';
          return;
        }

        if (!session || !session.user) {
          console.log('No session found, redirecting to home');
          window.location.href = '/';
          return;
        }

        setUser(session.user);
        await fetchApiKeyData(session.user.email);
      } catch (error) {
        console.error('Auth check error:', error);
        window.location.href = '/';
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        window.location.href = '/';
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const fetchApiKeyData = async (email) => {
    try {
      const response = await fetch('https://smart-converter-backend-5zmh.onrender.com/api/get-user-api-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: email }),
      });

      const result = await response.json();
      
      if (result.success) {
        setApiKeyData(result.data);
        return result.data;
      } else if (response.status === 404) {
        // User exists but no API key
        setApiKeyData(null);
        return null;
      } else {
        console.error('API fetch error:', result.error);
        return null;
      }
    } catch (error) {
      console.error('Network error fetching API key data:', error);
      return null;
    }
  };

  const generateApiKey = async () => {
    if (!user?.email) return;
  
    setIsGenerating(true);
    setMessage({ type: '', text: '' });
  
    try {
      const requestBody = { name: user.email };

      const response = await fetch('https://smart-converter-backend-5zmh.onrender.com/api/generate-api-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      if (result.success) {
        // Show the real API key only once with a warning
        setApiKeyData({
          ...result.data,
          showingRealKey: true, // Flag to show this is the real key
          realApiKey: result.data.api_key // Store the real key temporarily
        });
        
        setShowApiKey(true); // Force show the key
        setMessage({ 
          type: 'success', 
          text: 'IMPORTANT: This is your API key. Copy it now - you won\'t be able to see it again!' 
        });
        
        // After 30 seconds, hide the real key and show masked version
        setTimeout(async () => {
          await fetchApiKeyData(user.email);
          setShowApiKey(false);
          setMessage({ 
            type: 'warning', 
            text: 'API key is now hidden for security. You can only see a masked version.' 
          });
        }, 30000);
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to generate API key' });
      }
    } catch (error) {
      console.error('Error generating API key:', error);
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setIsGenerating(false);
    }
  };

  const deleteApiKey = async () => {
    if (!user?.email || !apiKeyData) return;
  
    setIsDeleting(true);
    setMessage({ type: '', text: '' });
  
    try {
      const response = await fetch('https://smart-converter-backend-5zmh.onrender.com/api/delete-api-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: user.email }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setMessage({ type: 'success', text: 'API key deleted successfully! Reloading page...' });
        
        // Reload the page after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to delete API key' });
      }
    } catch (error) {
      console.error('Error deleting API key:', error);
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setIsDeleting(false);
    }
  };

  const cancelSubscription = async () => {
    if (!user?.email) return;

    if (!confirm('Are you sure you want to cancel your Pro subscription? You will continue to have Pro access until the end of your current billing period, after which your account will be downgraded to the Free plan.')) {
      return;
    }

    setIsCanceling(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://smart-converter-backend-5zmh.onrender.com/api/subscription/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: user.email }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: result.message || 'Subscription cancelled successfully. You will continue to have Pro access until the end of your billing period.' 
        });
        // Refresh the API key data to update the subscription status
        setTimeout(() => {
          fetchApiKeyData(user.email);
        }, 1000);
      } else {
        setMessage({ type: 'error', text: result.error || result.message || 'Failed to cancel subscription' });
      }
    } catch (error) {
      console.error('Error canceling subscription:', error);
      setMessage({ type: 'error', text: 'Network error occurred' });
    } finally {
      setIsCanceling(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getPlanIcon = (plan) => {
    switch (plan?.toLowerCase()) {
      case 'pro':
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 'premium':
        return <Zap className="w-5 h-5 text-purple-400" />;
      default:
        return <User className="w-5 h-5 text-blue-400" />;
    }
  };

  const getPlanColor = (plan) => {
    switch (plan?.toLowerCase()) {
      case 'pro':
        return 'from-yellow-600/20 to-orange-600/20 border-yellow-500/30';
      case 'premium':
        return 'from-purple-600/20 to-pink-600/20 border-purple-500/30';
      default:
        return 'from-blue-600/20 to-cyan-600/20 border-blue-500/30';
    }
  };

  const getSubscriptionStatusInfo = (status) => {
    switch (status) {
      case 'active':
        return {
          color: 'text-green-400',
          bgColor: 'bg-green-900/20 border-green-500/30',
          icon: <CheckCircle className="w-5 h-5" />,
          text: 'Active - Your subscription is active and will renew automatically'
        };
      case 'cancel_at_period_end':
        return {
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-900/20 border-yellow-500/30',
          icon: <Clock className="w-5 h-5" />,
          text: 'Scheduled for Cancellation - You will keep Pro access until your billing period ends'
        };
      case 'cancelled':
        return {
          color: 'text-red-400',
          bgColor: 'bg-red-900/20 border-red-500/30',
          icon: <X className="w-5 h-5" />,
          text: 'Cancelled - Your subscription has ended and you\'ve been downgraded to the Free plan'
        };
      case 'past_due':
        return {
          color: 'text-red-400',
          bgColor: 'bg-red-900/20 border-red-500/30',
          icon: <AlertCircle className="w-5 h-5" />,
          text: 'Past Due - Payment failed. Please update your payment method to restore Pro access.'
        };
      case 'paused':
        return {
          color: 'text-blue-400',
          bgColor: 'bg-blue-900/20 border-blue-500/30',
          icon: <AlertCircle className="w-5 h-5" />,
          text: 'Paused - Your subscription is temporarily paused'
        };
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
          <span className="text-white text-lg">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-800/50 rounded-full px-6 py-3 mb-6 backdrop-blur-sm border border-gray-700">
              <Key className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-sm">API Key Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your API
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Generate, manage, and monitor your Forge API key usage
            </p>
          </div>

          {/* Message Display */}
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg border flex items-center ${
              message.type === 'success' 
                ? 'bg-green-900/20 border-green-500/30 text-green-400'
                : message.type === 'warning'
                ? 'bg-yellow-900/20 border-yellow-500/30 text-yellow-400'
                : 'bg-red-900/20 border-red-500/30 text-red-400'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
              )}
              {message.text}
            </div>
          )}

          {/* User Info Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 p-8 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-blue-600/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Welcome back!</h2>
                  <p className="text-gray-300">{user?.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {apiKeyData && (
                  <div className={`bg-gradient-to-r ${getPlanColor(apiKeyData.plan)} rounded-lg px-4 py-2 border`}>
                    <div className="flex items-center">
                      {getPlanIcon(apiKeyData.plan)}
                      <span className="ml-2 font-semibold capitalize">{apiKeyData.plan} Plan</span>
                    </div>
                  </div>
                )}

                {/* Subscription Action Buttons - Only show for active subscriptions */}
                {apiKeyData && apiKeyData.plan?.toLowerCase() === 'pro' && apiKeyData.subscription_status === 'active' && (
                  <div className="flex gap-2">
                    <button
                      onClick={cancelSubscription}
                      disabled={isCanceling}
                      className="flex items-center bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 px-4 py-2 rounded-lg transition-colors disabled:opacity-50 text-sm"
                      title="Cancel your subscription at the end of the billing period"
                    >
                      {isCanceling ? (
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <X className="w-4 h-4 mr-2" />
                      )}
                      {isCanceling ? 'Canceling...' : 'Cancel Subscription'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Subscription Status Banner */}
            {apiKeyData && getSubscriptionStatusInfo(apiKeyData.subscription_status) && (
              <div className={`mb-6 p-4 rounded-lg border ${getSubscriptionStatusInfo(apiKeyData.subscription_status).bgColor}`}>
                <div className={`flex items-center ${getSubscriptionStatusInfo(apiKeyData.subscription_status).color}`}>
                  {getSubscriptionStatusInfo(apiKeyData.subscription_status).icon}
                  <span className="font-semibold ml-2">
                    Subscription Status: {apiKeyData.subscription_status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${getSubscriptionStatusInfo(apiKeyData.subscription_status).color.replace('400', '300')}`}>
                  {getSubscriptionStatusInfo(apiKeyData.subscription_status).text}
                </p>
                
                {/* Additional info for cancel_at_period_end */}
                {apiKeyData.subscription_status === 'cancel_at_period_end' && (
                  <div className="mt-3 p-3 bg-yellow-900/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-yellow-200 text-sm">
                      <strong>What happens next:</strong>
                    </p>
                    <ul className="text-yellow-300 text-sm mt-1 list-disc list-inside space-y-1">
                      <li>You'll keep all Pro features until your billing period ends</li>
                      <li>No further charges will be made to your payment method</li>
                      <li>Your account will automatically downgrade to the Free plan</li>
                    </ul>
                  </div>
                )}

                {/* Past Due Special Banner */}
                {apiKeyData.subscription_status === 'past_due' && (
                  <div className="mt-3 p-3 bg-red-900/30 border border-red-500/40 rounded-lg">
                    <p className="text-red-200 text-sm">
                      <strong>Action Required:</strong>
                    </p>
                    <ul className="text-red-300 text-sm mt-1 list-disc list-inside space-y-1">
                      <li>Your payment method was declined</li>
                      <li>Pro features have been temporarily disabled</li>
                      <li>Update your payment method to restore access</li>
                      <li>Contact support if you need assistance</li>
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Free User Instructions */}
            {isFree ? (
              <div className="text-center py-12">
                <div className="bg-gray-700/30 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  API key generation is available for Pro users only. Free users can get their API key directly from OpenRouter.
                </p>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
                  <h4 className="font-semibold text-blue-400 mb-3 flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Get Your Free API Key
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</div>
                      <p className="text-gray-300">Visit <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">openrouter.ai</a></p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</div>
                      <p className="text-gray-300">Sign up for a free account</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</div>
                      <p className="text-gray-300">Generate your free API key</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</div>
                      <p className="text-gray-300">Use it directly with the Forge API</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://openrouter.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-6"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Get Free API Key
                </a>
                
                <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg text-left">
                  <p className="text-yellow-400 text-sm">
                    <strong>Want managed API keys?</strong> Upgrade to Pro to generate and manage your API keys directly through our platform with higher rate limits and premium support.
                  </p>
                </div>
              </div>
            ) : (
              /* API Key Section for Pro Users */
              apiKeyData && apiKeyData.hasApiKey ? (
                <div className="space-y-6">
                  {/* API Key Display */}
                  <div className="bg-black/30 rounded-lg p-6 border border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Shield className="w-5 h-5 text-green-400 mr-2" />
                        Your API Key
                      </h3>
                      {/* Only show eye button if we have the real key */}
                      {apiKeyData.showingRealKey && (
                        <button
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      )}
                    </div>
                    
                    {/* Security warning banner */}
                    {apiKeyData.showingRealKey && (
                      <div className="bg-red-900/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-4 flex items-start">
                        <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <strong>Security Warning:</strong> This is your actual API key. Copy it and store it safely. 
                          After 30 seconds or when you refresh, only a masked version will be shown for security.
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                      {apiKeyData.showingRealKey ? (
                        // Show real key or hidden based on showApiKey state
                        showApiKey ? apiKeyData.realApiKey || apiKeyData.api_key : '••••••••••••••••••••••••••••••••'
                      ) : (
                        // Always show masked version when not showing real key
                        apiKeyData.api_key
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      {/* Only show copy button when showing real key */}
                      {apiKeyData.showingRealKey && (
                        <button
                          onClick={() => copyToClipboard(apiKeyData.realApiKey || apiKeyData.api_key)}
                          className="flex items-center bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 px-4 py-2 rounded-lg transition-colors"
                        >
                          {copySuccess ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          ) : (
                            <Copy className="w-4 h-4 mr-2" />
                          )}
                          {copySuccess ? 'Copied!' : 'Copy Key'}
                        </button>
                      )}
                      
                      <button
                        onClick={deleteApiKey}
                        disabled={isDeleting}
                        className="flex items-center bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                      >
                        {isDeleting ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4 mr-2" />
                        )}
                        {isDeleting ? 'Deleting...' : 'Delete Key'}
                      </button>
                    </div>
                    
                    {/* Additional info for masked keys */}
                    {!apiKeyData.showingRealKey && (
                      <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                        <p className="text-blue-400 text-sm flex items-center">
                          <Shield className="w-4 h-4 mr-2" />
                          This is a masked version for security. Your real API key is safely stored and encrypted.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Usage Statistics */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-600/10 rounded-lg p-6 border border-blue-500/20">
                      <div className="text-blue-400 text-sm font-medium mb-2">Daily Limit</div>
                      <div className="text-3xl font-bold">{apiKeyData.limit}</div>
                    </div>
                    
                    <div className="bg-green-600/10 rounded-lg p-6 border border-green-500/20">
                      <div className="text-green-400 text-sm font-medium mb-2">Used Today</div>
                      <div className="text-3xl font-bold">{apiKeyData.count}</div>
                    </div>
                    
                    <div className="bg-purple-600/10 rounded-lg p-6 border border-purple-500/20">
                      <div className="text-purple-400 text-sm font-medium mb-2">Remaining</div>
                      <div className="text-3xl font-bold">{apiKeyData.remaining}</div>
                    </div>
                  </div>

                  {/* Usage Progress Bar */}
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Daily Usage</span>
                      <span className="text-sm text-gray-400">
                        {apiKeyData.count}/{apiKeyData.limit} requests
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-300 ${
                          apiKeyData.count >= apiKeyData.limit 
                            ? 'bg-red-500' 
                            : apiKeyData.count >= apiKeyData.limit * 0.8 
                              ? 'bg-yellow-500' 
                              : 'bg-blue-500'
                        }`}
                        style={{ 
                          width: `${Math.min((apiKeyData.count / apiKeyData.limit) * 100, 100)}%` 
                        }}
                      ></div>
                    </div>
                    {apiKeyData.is_limit_reached && (
                      <p className="text-red-400 text-sm mt-2">
                        Daily limit reached. Your usage will reset tomorrow.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                /* Generate API Key Section for Pro Users */
                <div className="text-center py-12">
                  <div className="bg-gray-700/30 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Key className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">No API Key Found</h3>
                  <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    Generate your first API key to start using the Forge API for code processing and refactoring.
                  </p>
                  
                  <button
                    onClick={generateApiKey}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center mx-auto"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Key className="w-5 h-5 mr-2" />
                        Generate API Key
                      </>
                    )}
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyPage;