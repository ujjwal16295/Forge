import { ArrowLeft } from 'lucide-react'
import React from 'react'

export const LoginHeader = () => {
  return (
    <div>
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
      
    </div>
     )
}
