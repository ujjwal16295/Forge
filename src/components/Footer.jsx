import React from 'react'

export const Footer = () => {

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
  
  return (
    <div>
      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Forge
              </div>
              <p className="text-gray-400">
                AI-powered code refactor that makes your codebase cleaner, modular, and easier to maintain.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <a href="/#features"  onClick={(e)=>{scrollToFeatures(e,"features")}}  className="hover:text-white cursor-pointer transition-colors block">Features</a>
                <a href="/how-to-use" className="hover:text-white cursor-pointer transition-colors block">How it Works</a>
                <a href="/#pricing"  onClick={(e)=>{scrollToFeatures(e,"pricing")}} className="hover:text-white cursor-pointer transition-colors block">Pricing</a>
                <a href="/api-key" className="hover:text-white cursor-pointer transition-colors block">API Key</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <a href="/#feedback"               onClick={(e)=>{scrollToFeatures(e,"feedback")}} className="hover:text-white cursor-pointer transition-colors block">Feedback Form</a>
                <a href="/#contact-us" onClick={(e)=>{scrollToFeatures(e,"contact")}} className="hover:text-white cursor-pointer transition-colors block">Contact</a>
                <a href="/termsofservice" className="hover:text-white cursor-pointer transition-colors block">Terms of Service</a>
                <a href="/privacypolicy"  className="hover:text-white cursor-pointer transition-colors block">Privacy Policy</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-gray-400">
                <a 
                  href="https://www.instagram.com/__quber_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer transition-colors block"
                >
                  Instagram
                </a>
                <a 
                  href="https://x.com/Quber19786" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer transition-colors block"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Forge. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}