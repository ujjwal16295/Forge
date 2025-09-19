"use client"
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  GitBranch, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  FileText,
  Trash2,
  Package,
  Import,
  AlertTriangle,
  RefreshCw,
  Eye,
  Merge,
  Undo2,
  Target,
  Layers,
  BookOpen,
  Search,
  Settings,
  X,
  Crown,
  Star,
  PlusCircle,
  Wand2,
  FileCode,
  Sparkles,
  Cpu,
  BarChart3,
  FileSearch
} from 'lucide-react';

const ForgeFeatures = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  const [scrollY, setScrollY] = useState(0);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureCategories = {
    core: {
      title: "AI-Powered Refactoring",
      description: "Complete file replacement and code transformation using advanced AI models",
      color: "blue",
      features: [
        {
          icon: RefreshCw,
          title: "Complete File Replacement",
          description: "Rewrites entire codebases while preserving unselected files using Deepseek (free) or GPT-5-mini (paid)",
          benefits: ["Full codebase transformation", "Preserves unselected files", "AI-powered improvements", "Choice of AI models"]
        },
        {
          icon: Target,
          title: "React/Next.js Project Detection",
          description: "Automatically detects and analyzes React and Next.js projects for targeted refactoring",
          benefits: ["Framework-specific optimizations", "Automatic project analysis", "Targeted improvements"]
        },
        {
          icon: FileText,
          title: "File Selection with Limits",
          description: "Modern web-based UI for selecting files with word count limits and progress tracking",
          benefits: ["Controlled refactoring scope", "Resource management", "Real-time progress updates"]
        }
      ]
    },
    generation: {
      title: "Custom File Generation",
      description: "AI-powered creation of new files based on user requirements and project context",
      color: "emerald",
      features: [
        {
          icon: PlusCircle,
          title: "Smart File Creation",
          description: "Generate completely new files based on user prompts while following existing project patterns and structure",
          benefits: ["Context-aware generation", "Follows project conventions", "Production-ready code", "Complete functionality"],
          isPro: true
        },
        {
          icon: Wand2,
          title: "Intelligent Integration",
          description: "Automatically integrates with existing codebase, suggesting new dependencies and configuration changes",
          benefits: ["Seamless integration", "Dependency management", "Configuration updates", "README instructions"],
          isPro: true
        },
        {
          icon: Shield,
          title: "Security-First Approach",
          description: "Extracts hardcoded secrets and replaces them with environment variables during generation",
          benefits: ["Automatic secret detection", "Environment variable setup", "Security best practices", "No hardcoded credentials"],
          isPro: true
        },
        {
          icon: FileCode,
          title: "File Modification Support",
          description: "Can completely rewrite existing files when modifications are requested, maintaining full functionality",
          benefits: ["Complete file rewrites", "Maintains functionality", "No placeholders", "Working code only"],
          isPro: true
        }
      ]
    },
    optimization: {
      title: "File Optimization",
      description: "AI-powered code optimization for better performance, maintainability, and modern practices",
      color: "orange",
      features: [
        {
          icon: Cpu,
          title: "Performance Optimization",
          description: "Improves code speed, reduces memory usage, and optimizes algorithms while preserving functionality",
          benefits: ["Faster execution", "Reduced memory usage", "Algorithm improvements", "Performance gains"],
          isPro: true
        },
        {
          icon: Code,
          title: "Code Quality Enhancement",
          description: "Improves code structure, adds proper error handling, and enhances readability",
          benefits: ["Better structure", "Enhanced readability", "Proper error handling", "Clean code practices"],
          isPro: true
        },
        {
          icon: Sparkles,
          title: "Modern Best Practices",
          description: "Updates code to use latest syntax, async patterns, and modern security practices",
          benefits: ["Latest syntax", "Async patterns", "Security improvements", "Modern standards"],
          isPro: true
        },
      ]
    },
    git: {
      title: "Git Integration",
      description: "Safe branch-based workflow with complete version control",
      color: "purple",
      features: [
        {
          icon: GitBranch,
          title: "Branch-Based Refactoring",
          description: "Creates separate branches for AI refactoring with safe comparison workflows",
          benefits: ["Zero risk to main branch", "Safe experimentation", "Easy comparison"]
        },
        {
          icon: Merge,
          title: "Merge/Revert Capabilities",
          description: "Full control to merge AI changes or revert with detailed commit management",
          benefits: ["Complete control over changes", "Safe code management", "Detailed change tracking"]
        },
        {
          icon: FileText,
          title: "Commit Management",
          description: "Detailed change summaries and commit tracking throughout the refactoring process",
          benefits: ["Clear change documentation", "Comprehensive tracking", "Informed decisions"]
        }
      ]
    },
    security: {
      title: "Security Features",
      description: "Hardcoded secret detection and environment variable management",
      color: "green",
      features: [
        {
          icon: Shield,
          title: "Hardcoded Secret Extraction",
          description: "Automatically detects and extracts hardcoded secrets from your codebase",
          benefits: ["Enhanced security", "Prevents credential leaks", "Automated detection"]
        },
        {
          icon: Settings,
          title: "Environment Variable Setup",
          description: "Automatically sets up environment variables for extracted secrets",
          benefits: ["Secure credential management", "Automated setup", "Best practice compliance"]
        }
      ]
    },
    management: {
      title: "Project Management",
      description: "API management, dependency cleanup, and error handling",
      color: "yellow",
      features: [
        {
          icon: Package,
          title: "Dependency Analysis & Cleanup",
          description: "Removes unused npm packages and analyzes project dependencies",
          benefits: ["Cleaner project structure", "Reduced bundle size", "Better performance"]
        },
        {
          icon: Code,
          title: "API Key Management",
          description: "Complete API key management with usage tracking and rate limiting",
          benefits: ["Secure API usage", "Usage monitoring", "Rate limit protection"]
        },
        {
          icon: AlertTriangle,
          title: "Comprehensive Error Handling",
          description: "Detailed user feedback and robust error handling throughout the process",
          benefits: ["Better user experience", "Clear error messages", "Reliable operation"]
        }
      ]
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-600/20 to-blue-800/20",
        border: "border-blue-500/30",
        accent: "text-blue-400",
        button: "bg-blue-600/20 hover:bg-blue-600/30",
        gradient: "from-blue-400 to-blue-600"
      },
      emerald: {
        bg: "from-emerald-600/20 to-emerald-800/20",
        border: "border-emerald-500/30",
        accent: "text-emerald-400",
        button: "bg-emerald-600/20 hover:bg-emerald-600/30",
        gradient: "from-emerald-400 to-emerald-600"
      },
      orange: {
        bg: "from-orange-600/20 to-orange-800/20",
        border: "border-orange-500/30",
        accent: "text-orange-400",
        button: "bg-orange-600/20 hover:bg-orange-600/30",
        gradient: "from-orange-400 to-orange-600"
      },
      purple: {
        bg: "from-purple-600/20 to-purple-800/20",
        border: "border-purple-500/30",
        accent: "text-purple-400",
        button: "bg-purple-600/20 hover:bg-purple-600/30",
        gradient: "from-purple-400 to-purple-600"
      },
      green: {
        bg: "from-green-600/20 to-green-800/20",
        border: "border-green-500/30",
        accent: "text-green-400",
        button: "bg-green-600/20 hover:bg-green-600/30",
        gradient: "from-green-400 to-green-600"
      },
      yellow: {
        bg: "from-yellow-600/20 to-yellow-800/20",
        border: "border-yellow-500/30",
        accent: "text-yellow-400",
        button: "bg-yellow-600/20 hover:bg-yellow-600/30",
        gradient: "from-yellow-400 to-yellow-600"
      },
      indigo: {
        bg: "from-indigo-600/20 to-indigo-800/20",
        border: "border-indigo-500/30",
        accent: "text-indigo-400",
        button: "bg-indigo-600/20 hover:bg-indigo-600/30",
        gradient: "from-indigo-400 to-indigo-600"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
      
        {/* Updated Status Banner */}
        {showBanner && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-800/20 border border-indigo-500/30 rounded-xl p-6 text-center backdrop-blur-sm relative">
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-4 right-4 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 p-1 rounded-full hover:bg-indigo-400/10"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-400 mr-3" />
                <h3 className="text-xl font-semibold text-indigo-400">Latest AI Features Available</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Free Tier */}
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-5 h-5 text-blue-400 mr-2" />
                    <h4 className="font-semibold text-blue-400">Free Users</h4>
                  </div>
                  <div className="text-gray-200 space-y-2">
                    <p><span className="font-semibold text-blue-300">Deepseek</span> - Code Refactoring</p>
                    <p className="text-sm text-gray-400">Full refactoring capabilities</p>
                  </div>
                </div>
                
                {/* Pro Tier */}
                <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg p-4 border border-yellow-500/30">
                  <div className="flex items-center justify-center mb-3">
                    <Crown className="w-5 h-5 text-yellow-400 mr-2" />
                    <h4 className="font-semibold text-yellow-400">Pro Users</h4>
                  </div>
                  <div className="text-gray-200 space-y-2">
                    <p><span className="font-semibold text-yellow-300">GPT-5-mini</span> - All Features</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• Code Refactoring</p>
                      <p>• <span className="text-emerald-300 font-semibold">Custom File Generation</span></p>
                      <p>• <span className="text-orange-300 font-semibold">File Optimization</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-gray-300">
                <p>Currently supporting <span className="font-semibold text-indigo-300">Next.js and React.js</span> projects</p>
                <p className="text-sm text-gray-400 mt-2">
                  <span className="text-emerald-300">New:</span> Custom file generation and optimization features now available for Pro users
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Updated Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(featureCategories).map(([key, category]) => {
            const colorClasses = getColorClasses(category.color);
            const hasProFeatures = category.features?.some(f => f.isPro);
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${colorClasses.gradient} text-white`
                    : `bg-gray-800/50 text-gray-300 hover:bg-gray-700/50`
                }`}
              >
                {category.title}
                {hasProFeatures && (
                  <Crown className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${getColorClasses(featureCategories[activeCategory].color).gradient} bg-clip-text text-transparent`}>
                {featureCategories[activeCategory].title}
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {featureCategories[activeCategory].description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {featureCategories[activeCategory].features.map((feature, index) => {
              const colorClasses = getColorClasses(featureCategories[activeCategory].color);
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses.bg} p-8 rounded-2xl border ${colorClasses.border} hover:border-opacity-60 transition-all duration-300 group hover:transform hover:scale-105 backdrop-blur-sm relative`}
                >
                  {feature.isPro && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Crown className="w-3 h-3 mr-1" />
                        PRO
                      </div>
                    </div>
                  )}
                  
                  <div className={`${colorClasses.button} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 ${colorClasses.accent}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className={`font-semibold ${colorClasses.accent} mb-3`}>Key Benefits:</h4>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className={`w-4 h-4 ${colorClasses.accent} mr-3 flex-shrink-0`} />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgeFeatures;