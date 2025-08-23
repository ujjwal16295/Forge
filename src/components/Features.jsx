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
  X
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
      title: "Core Refactoring",
      description: "Essential code transformation and optimization tools",
      color: "blue",
      features: [
        {
          icon: Target,
          title: "Variable & Function Naming Convention Fixer",
          description: "Ensures all variable and function names follow consistent naming conventions (camelCase, snake_case, PascalCase)",
          benefits: ["Improved code readability", "Consistent naming patterns", "Better maintainability"]
        },
        {
          icon: Layers,
          title: "Code Modularization",
          description: "Breaks large, monolithic code blocks into smaller, reusable, and more organized modules or functions",
          benefits: ["Enhanced maintainability", "Better code organization", "Easier scaling and understanding"]
        },
        {
          icon: RefreshCw,
          title: "Code Reusability Improvements",
          description: "Refactors repetitive code into reusable functions or utilities, reducing duplication",
          benefits: ["DRY principle compliance", "Reduced code duplication", "Improved maintainability"]
        }
      ]
    },
    git: {
      title: "Git Integration",
      description: "Safe and controlled code changes with full version control",
      color: "purple",
      features: [
        {
          icon: GitBranch,
          title: "Diff Branch Creation",
          description: "Automatically creates a separate diff branch whenever AI refactoring is applied for safe comparison",
          benefits: ["Zero risk to main branch", "Easy change comparison", "Safe experimentation"]
        },
        {
          icon: Eye,
          title: "Change Review System",
          description: "Compare AI-suggested changes against your original code before making any decisions",
          benefits: ["Full control over changes", "Transparent modifications", "Informed decisions"]
        },
        {
          icon: Merge,
          title: "Merge Approval Workflow",
          description: "Full control to either merge AI-suggested changes into main branch or reject them safely",
          benefits: ["Developer-controlled integration", "Safe collaboration", "Risk mitigation"]
        },
        {
          icon: Undo2,
          title: "Instant Rollback",
          description: "Quick rollback option to revert any AI-applied refactorings with one click",
          benefits: ["Quick error recovery", "Safe experimentation", "No permanent damage"]
        }
      ]
    },
    optimization: {
      title: "Security Checks",
      description: "Essential security scanning to identify common vulnerabilities",
      color: "green",
      features: [
        {
          icon: Shield,
          title: "Hardcoded Secrets Detection",
          description: "Detects hardcoded API keys, passwords, and other sensitive credentials in your code",
          benefits: ["Enhanced security", "Prevents credential leaks", "Compliance support"]
        },
        {
          icon: AlertTriangle,
          title: "Injection Risk Detection",
          description: "Identifies potential SQL injection and command injection vulnerabilities",
          benefits: ["Prevents security exploits", "Safer database interactions", "Secure command execution"]
        },
        {
          icon: Package,
          title: "Insecure Dependencies Check",
          description: "Scans for known vulnerable dependencies and insecure cryptography usage",
          benefits: ["Secure dependency management", "Up-to-date security practices", "Reduced attack surface"]
        },
        {
          icon: Import,
          title: "Security Best Practices",
          description: "Checks for HTTPS usage, input validation, and secure error handling practices",
          benefits: ["Better security posture", "Industry best practices", "Reduced information disclosure"]
        }
      ]
    },
    documentation: {
      title: "Additional Features",
      description: "Supporting features that enhance the development experience",
      color: "yellow",
      features: [
        {
          icon: FileText,
          title: "Code Analysis",
          description: "Analyzes code structure to identify areas that would benefit from refactoring",
          benefits: ["Better code understanding", "Targeted improvements", "Informed refactoring decisions"]
        },
        {
          icon: BookOpen,
          title: "Best Practice Suggestions",
          description: "Provides suggestions based on coding best practices and conventions",
          benefits: ["Improved code quality", "Industry standards compliance", "Learning opportunities"]
        },
        {
          icon: RefreshCw,
          title: "Continuous Improvement",
          description: "Regularly updated security checks and refactoring patterns",
          benefits: ["Stay current with threats", "Evolving best practices", "Ongoing code enhancement"]
        },
        {
          icon: Target,
          title: "Focused Refactoring",
          description: "Targets specific improvement areas like naming, structure, and reusability",
          benefits: ["Precise improvements", "Measurable results", "Systematic enhancement"]
        }
      ]
    },
    workflow: {
      title: "Workflow Integration",
      description: "Seamless integration with your development workflow",
      color: "indigo",
      features: [
        {
          icon: CheckCircle,
          title: "Zero Disruption",
          description: "Works quietly in the background without interrupting your VS Code workflow",
          benefits: ["Seamless experience", "No learning curve", "Natural integration"]
        },
        {
          icon: Users,
          title: "Safe Development",
          description: "Enables safe code improvements without breaking existing functionality or workflow",
          benefits: ["Risk-free refactoring", "Confidence in changes", "Better code quality"]
        },
        {
          icon: Settings,
          title: "Developer-Driven",
          description: "All AI suggestions require explicit developer approval with clear accept/reject options",
          benefits: ["Complete control", "Transparent process", "No unwanted changes"]
        },
        {
          icon: Zap,
          title: "Quick Improvements",
          description: "Rapidly applies consistent naming conventions and modularization improvements",
          benefits: ["Faster code cleanup", "Consistent standards", "Immediate benefits"]
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
      
        {/* Current Status Banner */}
        {showBanner && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6 text-center backdrop-blur-sm relative">
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 p-1 rounded-full hover:bg-yellow-400/10"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center justify-center mb-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-yellow-400">Early Access Notice</h3>
              </div>
              <div className="text-gray-200 space-y-2">
                <p>Currently we are supporting only <span className="font-semibold text-yellow-300">Next.js and React.js</span></p>
                <p>We are using <span className="font-semibold text-yellow-300">Gemini 2.5 Flash</span> allowing <span className="font-semibold text-yellow-300">10 users</span> currently</p>
                <p className="text-sm text-gray-300">Currently product is in early stage. Later we will move to better models</p>
              </div>
            </div>
          </div>
        )}

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(featureCategories).map(([key, category]) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${colorClasses.gradient} text-white`
                    : `bg-gray-800/50 text-gray-300 hover:bg-gray-700/50`
                }`}
              >
                {category.title}
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
          <div className="grid md:grid-cols-2 gap-8">
            {featureCategories[activeCategory].features.map((feature, index) => {
              const colorClasses = getColorClasses(featureCategories[activeCategory].color);
              const Icon = feature.icon;
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses.bg} p-8 rounded-2xl border ${colorClasses.border} hover:border-opacity-60 transition-all duration-300 group hover:transform hover:scale-105 backdrop-blur-sm`}
                >
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