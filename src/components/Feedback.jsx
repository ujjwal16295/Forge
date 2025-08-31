"use client"
import React, { useState } from 'react';
import { Star, Send, CheckCircle, X, MessageSquare, Tag } from 'lucide-react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const API_BASE_URL = 'https://smart-converter-backend-5zmh.onrender.com';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleRatingClick = (rating) => {
    // Rating functionality removed - no longer needed
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.title.trim()) return 'Title is required';
    if (!formData.description.trim()) return 'Description is required';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/submit-feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('API error:', data.error);
        setError('Failed to submit feedback. Please try again.');
        return;
      }

      console.log('Feedback submitted successfully:', data);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        title: '',
        description: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Unexpected error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center z-50 animate-in slide-in-from-right">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>Feedback submitted successfully!</span>
          <button 
            onClick={() => setShowSuccess(false)}
            className="ml-4 hover:text-green-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto relative">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        
        <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-gray-700">
              <MessageSquare className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-sm">We Value Your Input</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Share Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Feedback
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Help us improve Forge by sharing your experience, suggestions, or reporting any issues you've encountered.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-600/20 border border-red-600/50 text-red-400 px-4 py-3 rounded-lg flex items-center">
              <X className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Brief title of your feedback"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-vertical"
                placeholder="Share your detailed feedback, suggestions, or report any issues..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Send Feedback
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;