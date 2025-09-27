import React from 'react';
import { Shield, FileText, Users, AlertTriangle, Crown, Sparkles, Bot } from 'lucide-react';

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
            Last updated: September 2025
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

          {/* Section 2 - Updated */}
          <div className="mb-12 p-8 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-2xl border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Forge provides:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>AI-powered code refactoring and optimization</li>
              <li>Security vulnerability detection and suggestions</li>
              <li>Code modularization and naming convention improvements</li>
              <li>Custom file generation based on user requirements</li>
              <li>File optimization for performance and best practices</li>
              <li>Safe Git integration with diff branch creation</li>
              <li>API access through our VS Code extension</li>
            </ul>
          </div>

          {/* Section 3 - Updated */}
          <div className="mb-12 p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. API Keys and Account</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Free Users:</strong> You must obtain your own API key from OpenRouter and paste it in the API Key tab on our website. We use this key solely for usage tracking purposes.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Pro Users:</strong> You must generate an API key from our website to access the service.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              For both plans, you are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Keeping your API credentials secure and confidential</li>
              <li>Not sharing your API access with unauthorized parties</li>
              <li>Reporting any suspected unauthorized use immediately</li>
              <li>All activities that occur using your API access</li>
            </ul>
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
              <li>Your API key  for pro users (for service authentication)</li>
              <li>Usage metrics (API call counts and usage statistics)</li>
            </ul>
          </div>

          {/* Section 5 - Updated Service Plans */}
          <div className="mb-12 p-8 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-2xl border border-indigo-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">5. Service Plans and AI Models</h2>
            
            {/* Free Plan */}
            <div className="mb-6 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
              <div className="flex items-center mb-3">
                <Bot className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-blue-400">Free Plan</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Requires your own <strong>OpenRouter API key</strong></li>
                <li>Access to  <strong>Deepseek</strong> AI model</li>
                <li><strong>10 uses per day</strong> (resets daily at midnight)</li>
                <li>All core features included (same as Pro)</li>
                <li>Code refactoring and optimization</li>
                <li>Security vulnerability detection</li>
                <li>Custom file generation</li>
                <li>Advanced file optimization</li>
                <li>Safe Git integration</li>
                <li>Usage tracked for your reference</li>
              </ul>
            </div>

            {/* Pro Plan - Updated */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
              <div className="flex items-center mb-3">
                <Crown className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-purple-400">Pro Plan - $10/month</h3>
                <span className="text-xs text-gray-400 ml-2">(exclusive of tax)</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Generate API key from <strong>our website</strong></li>
                <li>Powered by <strong>GPT-5-mini</strong> premium AI model</li>
                <li>10 uses per day (resets daily at midnight)</li>
                <li>All features included (same as Free)</li>
                <li>Enhanced AI performance and capabilities</li>
                <li>Priority support</li>
                <li>Managed AI model access</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Key Differences:</strong> Both plans offer identical features. Free users bring their own OpenRouter API key and can use Deepseek model, while Pro users generate an API key from our website to access GPT-5-mini with managed AI model access.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Modify service plans and pricing with 30 days notice</li>
              <li>Implement usage limits to ensure fair access</li>
              <li>Introduce new features and pricing tiers</li>
              <li>Temporarily disable service for maintenance</li>
            </ul>
          </div>

          {/* Section 6 - Enhanced No Refund Policy */}
          <div className="mb-12 p-8 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-2xl border border-red-500/20">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">6. No Refund Policy</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>All sales are final.</strong> We do not offer refunds, credits, or cancellations for any payments made for Forge services under any circumstances, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Pro plan subscriptions (monthly or any future billing cycles)</li>
              <li>API credits or usage-based payments</li>
              <li>Accidental purchases or duplicate payments</li>
              <li>Dissatisfaction with service or AI model performance</li>
              <li>Technical issues or temporary service interruptions</li>
              <li>Changes in personal circumstances or business needs</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Subscription Cancellation:</strong> You may cancel your Pro subscription at any time to prevent future charges, but you will continue to have access to Pro features until the end of your current billing period. No refund will be provided for the remaining portion of your subscription.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Free Trial:</strong> We recommend starting with our Free plan to evaluate the service. You'll need to set up your own OpenRouter API key, but you'll have access to all the same features as Pro users with   Deepseek model.
            </p>
          </div>

          {/* Section 7 - Billing and Payment */}
          <div className="mb-12 p-8 bg-gradient-to-br from-green-600/10 to-teal-600/10 rounded-2xl border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Billing and Payment</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Pro Plan Billing:</strong> Pro subscriptions are billed monthly in advance. Payments are processed through our secure payment provider.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Free Plan Costs:</strong> Free users are responsible for their own OpenRouter API usage costs, which are charged directly by OpenRouter based on your usage of  Deepseek model.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Monthly subscriptions automatically renew unless cancelled</li>
              <li>Payment is due immediately upon subscription</li>
              <li>Failed payments may result in service suspension</li>
              <li>Prices are exclusive of applicable taxes</li>
              <li>You are responsible for any bank or payment processing fees</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              <strong>Usage Tracking:</strong> Free users get 10 uses per day, Pro users get 10 uses per day. Usage resets daily at midnight UTC, and unused daily usage does not roll over to the next day.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-2xl border border-red-500/20">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">8. Acceptable Use</h2>
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
              <li>Create multiple accounts to circumvent usage limits</li>
              <li>Use automated tools to exceed plan limitations</li>
            </ul>
          </div>

          {/* Section 9 - Updated */}
          <div className="mb-12 p-8 bg-gradient-to-br from-teal-600/10 to-green-600/10 rounded-2xl border border-teal-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers and Limitations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Service Availability:</strong> We strive for high availability but cannot guarantee uninterrupted service.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>AI Suggestions:</strong> Our AI models (Deepseek, and GPT-5-mini) provide suggestions for refactoring, optimization, and file generation based on best practices, but you remain responsible for reviewing and testing all changes and generated code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Limitation of Liability:</strong> Forge is provided "as is" without warranties. We are not liable for any damages arising from the use of our service, including but not limited to code changes, security vulnerabilities, or business losses.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-gray-600/10 to-slate-600/10 rounded-2xl border border-gray-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Either party may terminate this agreement at any time. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Your API key will be deactivated</li>
              <li>Access to the service will be revoked</li>
              <li>Pro subscriptions will be cancelled (no refund provided)</li>
              <li>We may delete your account data as per our Privacy Policy</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              <strong>Account Suspension:</strong> We reserve the right to suspend or terminate accounts that violate these terms, exceed usage limits, or engage in abusive behavior.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-2xl border border-violet-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify users of significant changes via email or through our website at least 30 days in advance when possible.
            </p>
          </div>

          {/* Contact Section */}
          <div className="p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through newujjwalpatel@gmail.com or reach out via our social media channels.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;