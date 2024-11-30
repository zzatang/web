import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-50 ${montserrat.className}`}>
      {/* Navigation */}
      <nav className="fixed w-full glass-card z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-text">LocalSEO Tracker</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</Link>
              <Link href="/login" className="button-primary !py-2">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl"></div>
          <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-pink-100/50 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 gradient-text leading-tight">
              Dominate Local Search Rankings
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Track, analyze, and improve your business's Google search rankings in Sydney. 
              Stay ahead of local competition with real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button className="button-primary text-lg">
                Start Free Trial
              </button>
              <button className="button-secondary text-lg">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in local search</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card group">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 mb-6 
                            flex items-center justify-center text-white text-2xl transform transition-transform 
                            group-hover:scale-110">📈</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Real-time Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Get daily ranking updates and instant notifications when your positions change.</p>
            </div>
            <div className="feature-card group">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 mb-6 
                            flex items-center justify-center text-white text-2xl transform transition-transform 
                            group-hover:scale-110">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Focus</h3>
              <p className="text-gray-600 leading-relaxed">Specialized insights for Sydney businesses with local market analysis.</p>
            </div>
            <div className="feature-card group">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 mb-6 
                            flex items-center justify-center text-white text-2xl transform transition-transform 
                            group-hover:scale-110">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Smart Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive reports with competitor analysis and actionable insights.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100/50 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">Start free, upgrade when you need more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="pricing-card">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Tier</h3>
                  <p className="text-gray-600">Perfect for getting started</p>
                </div>
                <p className="text-4xl font-bold text-gray-900">$0<span className="text-base font-normal text-gray-600">/mo</span></p>
              </div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Track up to 3 keywords
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Weekly ranking updates
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Basic dashboard
                </li>
              </ul>
              <button className="button-secondary w-full">Get Started Free</button>
            </div>
            
            {/* Pro Tier */}
            <div className="pricing-card-pro text-white">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pro Tier</h3>
                  <p className="text-white/80">For serious businesses</p>
                </div>
                <p className="text-4xl font-bold">$49<span className="text-base font-normal text-white/80">/mo</span></p>
              </div>
              <ul className="space-y-4 mb-8 text-white/90">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Track up to 10 keywords
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Daily ranking updates
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Advanced dashboard
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Priority support
                </li>
              </ul>
              <button className="w-full px-8 py-3 rounded-xl font-medium transition-all duration-200
                               bg-white text-indigo-600 hover:bg-opacity-90
                               shadow-lg hover:-translate-y-0.5">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="mb-4"> 2024 LocalSEO Tracker. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
