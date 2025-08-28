import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white mt-16">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto py-12 px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg border border-green-500/30">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect your data.
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
          <div className="mb-12 p-8 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-2xl border border-blue-500/20">
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Forge ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered code refactoring and security assistant service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using Forge, you consent to the practices described in this Privacy Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-green-600/10 to-teal-600/10 rounded-2xl border border-green-500/20">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                We collect minimal personal information necessary to provide our service:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Email Address:</strong> Used for account identification and communication</li>
                <li><strong>API Key:</strong> Generated for service authentication and access control</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>API Usage Metrics:</strong> Number of API calls made</li>
                <li><strong>Usage Statistics:</strong> Feature usage patterns and service performance data</li>
                <li><strong>Technical Data:</strong> IP addresses, browser type, and device information for security purposes</li>
              </ul>
            </div>

            <div className="p-4 bg-green-600/20 rounded-lg border border-green-500/30">
              <div className="flex items-center mb-2">
                <Lock className="w-5 h-5 text-green-400 mr-2" />
                <strong className="text-green-400">Important:</strong>
              </div>
              <p className="text-gray-300">
                <strong>We do NOT store, save, or retain any of your source code.</strong> Your code is processed in real-time for analysis and immediately discarded after processing.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Service Delivery:</strong> To provide AI-powered code analysis and refactoring suggestions</li>
              <li><strong>Authentication:</strong> To verify your identity and authorize API access</li>
              <li><strong>Usage Monitoring:</strong> To track API usage limits and prevent abuse</li>
              <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our algorithms</li>
              <li><strong>Communication:</strong> To send service updates, security alerts, and support responses</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and protect our rights</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl border border-yellow-500/20">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">4. Data Sharing and Disclosure</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our platform (e.g., hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or valid legal process</li>
              <li><strong>Safety and Security:</strong> To protect our users, service, or public safety</li>
              <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or asset sale</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              All third-party service providers are bound by confidentiality agreements and data protection standards.
            </p>
          </div>

          {/* Section 5 */}
          {/* <div className="mb-12 p-8 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-2xl border border-indigo-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
              <li><strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
              <li><strong>Secure Infrastructure:</strong> Our systems are hosted on secure, monitored infrastructure</li>
              <li><strong>Regular Audits:</strong> We regularly review and update our security practices</li>
              <li><strong>API Key Security:</strong> API keys are hashed and securely stored</li>
            </ul>
          </div> */}

          {/* Section 6 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-teal-600/10 to-green-600/10 rounded-2xl border border-teal-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We retain your information as follows:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period after deletion</li>
              <li><strong>Usage Data:</strong> Aggregated usage statistics may be retained for service improvement</li>
              <li><strong>Source Code:</strong> Never stored - processed in real-time and immediately discarded</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              You can request deletion of your account and associated data at any time by contacting us.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-red-600/10 to-pink-600/10 rounded-2xl border border-red-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your account and personal data</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
          </div>

          {/* Section 8 */}
          {/* <div className="mb-12 p-8 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-2xl border border-violet-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website may use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Enhance user experience and website functionality</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Remember your preferences and settings</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              You can control cookie settings through your browser preferences.
            </p>
          </div> */}

          {/* Section 9 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-2xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">7. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be processed and stored in countries other than your own. We ensure that any international transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-12 p-8 bg-gradient-to-br from-gray-600/10 to-slate-600/10 rounded-2xl border border-gray-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our service after such changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact Section */}
          <div className="p-8 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl border border-green-500/30 text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, your data, or our privacy practices, please contact us:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Through our website contact form</li>
              <li>Via our social media channels (Instagram, Twitter)</li>
              <li>Through the feedback form on our website</li>
              <li>              newujjwalpatel@gamil.com
</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;