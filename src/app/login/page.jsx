"use client"
import React, { useState, useEffect } from 'react';
import { Github, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ForgeLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const API_BASE_URL = 'https://smart-converter-backend-5zmh.onrender.com';

  // Check for existing session on component mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        console.log('Login page: Initializing auth check...');
        
        // Check if user is already logged in
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          console.log('Login page: User already logged in, redirecting to home...');
          // User is already logged in, redirect to home page
          window.location.href = '/';
          return;
        }

        // Check if this is an OAuth callback (URL will contain #access_token or other hash params)
        if (window.location.hash.includes('access_token') || window.location.hash.includes('error')) {
          console.log('Login page: OAuth callback detected in URL hash');
          setIsLoading(true);
          
          // Give Supabase a moment to process the callback
          setTimeout(async () => {
            const { data: { session: newSession } } = await supabase.auth.getSession();
            if (newSession) {
              console.log('Login page: Session found after OAuth callback, redirecting...');
              window.location.href = '/';
            } else {
              console.log('Login page: No session found after OAuth callback');
              setIsLoading(false);
            }
          }, 1000);
        }

        // Listen for auth changes (backup mechanism)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
          console.log('Login page: Auth state changed:', event, session?.user?.email);
          
          if (event === 'SIGNED_IN' && session) {
            console.log('Login page: Sign in detected, redirecting to home...');
            // Small delay to ensure everything is processed
            setTimeout(() => {
              window.location.href = '/';
            }, 500);
          }

          if (event === 'SIGNED_OUT') {
            console.log('Login page: User signed out');
            setIsLoading(false);
          }
        });

        // Cleanup subscription
        return () => {
          subscription?.unsubscribe();
        };

      } catch (error) {
        console.error('Login page: Failed to initialize auth:', error);
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // Check user limit via backend API
  const checkUserLimit = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/check-user-limit`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Error checking user limit:', data.error);
        return true; // Allow login if check fails
      }

      if (!data.canLogin) {
        alert(data.message || 'User limit reached. Try again later.');
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error checking user limit:', error);
      return true; // Allow login if check fails
    }
  };

  const handleGitHubLogin = async () => {
    console.log('Login page: GitHub login button clicked');
    
    // Check user limit before allowing login
    const canLogin = await checkUserLimit();
    if (!canLogin) {
      console.log('Login page: User limit reached, blocking login attempt');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/` // Redirect to homepage
        }
      });

      if (error) {
        console.error('Login page: Error signing in with GitHub:', error);
        setIsLoading(false);
      } else {
        console.log('Login page: OAuth initiated successfully');
        // Don't set loading to false here - let the auth state change handle it
      }
    } catch (error) {
      console.error('Login page: GitHub login failed:', error);
      setIsLoading(false);
    }
  };

  // Debug helper - you can remove this in production
  const testSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    console.log('Current session:', session);
    if (session) {
      console.log('User email:', session.user?.email);
      console.log('Session expires at:', new Date(session.expires_at * 1000));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-3xl"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Forge
          </div>
          <a 
            href="/"
            className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </a>
        </div>
      </nav>

      {/* Login Section */}
      <section className="pt-32 pb-20 px-6 relative flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm relative">
            <div className="text-center mb-8">
              <div className="text-3xl font-bold mb-2">Welcome to Forge</div>
              <p className="text-gray-300">Sign in to start enhancing your code</p>
            </div>

            {/* GitHub Login Button */}
            <button
              onClick={handleGitHubLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 hover:border-gray-500 px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin mr-3" />
              ) : (
                <Github className="w-6 h-6 mr-3" />
              )}
              {isLoading 
                ? 'Signing in...' 
                : 'Continue with GitHub'
              }
            </button>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                By signing in, you agree to our{' '}
                <a href="/termsofservice" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacypolicy" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              What you'll get with Forge:
            </h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                AI-powered code refactoring
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Safe Git branch integration
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Intelligent documentation generation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-600/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default ForgeLoginPage;