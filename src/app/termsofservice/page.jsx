import React from 'react';
import { Shield, FileText, Users, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white mt-16">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto py-12 px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-blue-500/30">
              <FileText className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using Forge
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="prose prose-invert max-w-none">
          
          {/* Section 1 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing or using Forge, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Forge is an AI-powered code refactoring and security assistant that helps developers clean, modularize, and optimize their code with safe Git integration through our VS Code extension.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-2xl border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Forge provides:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>AI-powered code refactoring and optimization</li>
              <li>Security vulnerability detection and suggestions</li>
              <li>Code modularization and naming convention improvements</li>
              <li>Safe Git integration with diff branch creation</li>
              <li>API access through our VS Code extension</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. API Keys and Account</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To use Forge, you must obtain an API key from our website. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Keeping your API key secure and confidential</li>
              <li>Not sharing your API key with unauthorized parties</li>
              <li>Reporting any suspected unauthorized use immediately</li>
              <li>All activities that occur using your API key</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to revoke or suspend API keys that violate these terms or show suspicious activity.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl border border-yellow-500/20">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">4. Data and Privacy</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Code Storage:</strong> We do NOT store, save, or retain any of your source code. Your code is processed in real-time and immediately discarded after analysis.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Data We Store:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your email address (for account identification)</li>
              <li>Your API key (for service authentication)</li>
              <li>Usage metrics (API call counts and usage statistics)</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-2xl border border-indigo-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Service Plans</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Free Plan:</strong> Currently available with limited usage. Additional plans are in development.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Modify service plans and pricing with notice</li>
              <li>Implement usage limits to ensure fair access</li>
              <li>Introduce new features and pricing tiers</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-2xl border border-red-500/20">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">6. Acceptable Use</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Use the service for illegal or unauthorized purposes</li>
              <li>Attempt to reverse engineer or compromise our systems</li>
              <li>Exceed reasonable usage limits or abuse the API</li>
              <li>Share or resell your API access</li>
              <li>Use the service to process malicious code or malware</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-teal-600/10 to-green-600/10 rounded-2xl border border-teal-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimers and Limitations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Service Availability:</strong> We strive for high availability but cannot guarantee uninterrupted service.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>AI Suggestions:</strong> Our AI provides suggestions based on best practices, but you remain responsible for reviewing and testing all changes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Limitation of Liability:</strong> Forge is provided "as is" without warranties. We are not liable for any damages arising from the use of our service.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-gray-600/10 to-slate-600/10 rounded-2xl border border-gray-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Either party may terminate this agreement at any time. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your API key will be deactivated</li>
              <li>Access to the service will be revoked</li>
              <li>We may delete your account data as per our Privacy Policy</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-2xl border border-violet-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify users of significant changes via email or through our website.
            </p>
          </div>

          {/* Contact Section */}
          <div className="p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through newujjwalpatel@gamil.com or reach out via our social media channels.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;