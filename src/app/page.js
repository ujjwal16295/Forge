"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, GitBranch, Zap, Shield, Users, Star, ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Header } from '@/components/Header';
import { supabase } from '../lib/supabase'; // Adjust path as needed
import ForgeFeatures from '@/components/Features';
import ContactUs from '@/components/ContactUs';
import Pricing from '@/components/Pricing';
import FeedbackForm from '@/components/Feedback';
import { Footer } from '@/components/Footer';

const ForgeHomepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const API_BASE_URL = 'https://smart-code-converter-backend.onrender.com';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auth handling useEffect
  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('Checking for auth session on homepage...');
        
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          return;
        }

        if (session && session.user) {
          console.log('Found session on home page:', session);
          
          // Check if this is a new login that hasn't been processed
          const hasProcessedAuth = localStorage.getItem(`auth_processed_${session.user.id}`);
          
          if (!hasProcessedAuth) {
            console.log('Processing new auth session...');
            await handleUserSession(session);
            localStorage.setItem(`auth_processed_${session.user.id}`, 'true');
          } else {
            console.log('Auth already processed for this user');
          }
        } else {
          console.log('No session found on homepage');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
      }
    };

    // Run immediately
    handleAuthCallback();

    // Also listen for auth state changes (for real-time updates)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed on homepage:', event, session);
      
      if (event === 'SIGNED_IN' && session) {
        await handleUserSession(session);
        localStorage.setItem(`auth_processed_${session.user.id}`, 'true');
      }
      
      if (event === 'SIGNED_OUT') {
        // Clean up localStorage on signout
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('auth_processed_')) {
            localStorage.removeItem(key);
          }
        });
      }
    });

    // Cleanup subscription
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Handle user session via backend API
  const handleUserSession = async (session) => {
    try {
      const user = session.user;
      const email = user.email;
      
      console.log('Processing user session for:', email);
      
      // Call backend API to handle user creation/update
      const response = await fetch(`${API_BASE_URL}/api/handle-user-auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Error handling user auth:', data.error);
        return;
      }

      if (data.success) {
        console.log('User successfully processed and stored in database');
      }

    } catch (error) {
      console.error('Unexpected error in handleUserSession:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
     <Header/>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center bg-gray-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-gray-700">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm">Your AI Teammate for Perfect Code</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Code Review,
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionized
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Forge automatically refactors, cleans, and documents your code while preserving readability. 
            All changes are safely pushed to separate Git branches for your review.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href='/api-key' className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group">
              Get Api Key
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
  <ForgeFeatures />
</section>
<section id='pricing'>
  <Pricing/>     
</section>
      <section id="contact">
        <ContactUs/>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Codebase?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of developers who've already upgraded their code review process
          </p>
          <div  className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/api-key" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Get an Api key
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section id="feedback">
        <FeedbackForm/>
      </section>

<Footer/>
    </div>
  );
};

export default ForgeHomepage;