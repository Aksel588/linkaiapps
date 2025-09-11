import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-first grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center p-1.5">
                <Image 
                  src="/logo_website.png" 
                  alt="Aqwel AI Logo" 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
              </div>
              <span className="text-lg font-bold text-gray-900">Aqwel AI</span>
            </div>
            <p className="text-sm text-gray-600 mb-4 sm:mb-6 max-w-xs">
              Building safe artificial general intelligence that benefits all of humanity.
            </p>
          </div>
          
          {/* Company Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Charter</a></li>
            </ul>
          </div>
          
          {/* Research Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 sm:mb-4">Research</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/research" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Research</Link></li>
              <li><Link href="/safety" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Safety</Link></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Papers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Models</a></li>
            </ul>
          </div>
          
          {/* Community Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 sm:mb-4">Community</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="https://github.com/Aqwel-AI" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/company/aqwelaiofficial/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">YouTube</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with better mobile layout */}
        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600 order-2 sm:order-1">
              © 2025 Aqwel AI. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 order-1 sm:order-2">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Use</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
