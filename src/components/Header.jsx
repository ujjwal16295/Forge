"use client"
import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { User, LogOut } from 'lucide-react'

export const Header = () => {
  const [user, setUser] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('Error getting session:', error)
        } else {
          setUser(session?.user || null)
        }
      } catch (error) {
        console.error('Session error:', error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
      setLoading(false)
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Error signing out:', error)
      } else {
        setUser(null)
        setShowDropdown(false)
        // Optionally redirect to home page
        window.location.href = '/'
      }
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  // Function to handle smooth scrolling to features section
  const scrollToFeatures = (e,page) => {
    e.preventDefault()
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If on home page, scroll to features section
      const featuresSection = document.getElementById(`${page}`)
      if (featuresSection) {
        featuresSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // If on another page, navigate to home page with features hash
      window.location.href = `/#${page}`
    }
  }

  // Function to handle other navigation links
  const handleNavigation = (href) => {
    // If it's a hash link and we're on home page, scroll smoothly
    if (href.startsWith('/#') && window.location.pathname === '/') {
      const targetId = href.substring(2) // Remove '/#'
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // Navigate normally
      window.location.href = href
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.user-dropdown')) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showDropdown])

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            <a href="/" className="cursor-pointer">Forge</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="/#features" 
              onClick={(e)=>{scrollToFeatures(e,"features")}}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="/how-to-use" 
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              How to Use
            </a>
            <a 
              href="/#pricing" 
              onClick={(e)=>{scrollToFeatures(e,"pricing")}}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a 
              href="/api-key" 
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              API Key
            </a>
            <a 
              href="/#feedback" 
              onClick={(e)=>{scrollToFeatures(e,"feedback")}}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
Feedback Form            </a>
            <a 
              href="/#contact" 
              onClick={(e)=>{scrollToFeatures(e,"contact")}}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>
          
          {/* Authentication Section */}
          {loading ? (
            <div className="w-20 h-10 bg-gray-700/50 animate-pulse rounded-lg"></div>
          ) : user ? (
            <div className="relative user-dropdown">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/50 hover:to-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500"
              >
                <User className="w-5 h-5" />
                <span className="max-w-40 truncate text-sm">
                  {user.email}
                </span>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-sm text-gray-300">Signed in as</p>
                    <p className="text-sm font-medium truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-left text-red-400 hover:bg-gray-700/50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a href="/login">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Log in
              </div>
            </a>
          )}
        </div>
      </nav>
    </div>
  )
}