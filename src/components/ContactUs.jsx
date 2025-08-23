import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-800/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-gray-700">
              <MessageSquare className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-sm">Get in Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Us</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Have questions about Forge? Need help with integration? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12 md:p-16">
              <Mail className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              
              <h3 className="text-2xl font-semibold mb-4">
                Reach Out to Us
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg">
                Drop us an email and we'll get back to you as soon as possible.
              </p>
              
              <a 
                href="mailto:newujjwalpatel@gmail.com"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-5 h-5 mr-3" />
                newujjwalpatel@gmail.com
              </a>
              
              <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm">
                  📧 We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;