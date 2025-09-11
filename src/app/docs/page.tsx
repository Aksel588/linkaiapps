'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Docs() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 font-tt-interphases">
            Documentation
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-8">
            Coming Soon
          </h2>
          
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're working hard to bring you comprehensive documentation for Aqwel AI. 
            Stay tuned for detailed guides, API references, and examples.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/"
              className="bg-gray-900 text-white font-medium py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg"
            >
              Back to Home
            </Link>
            <Link 
              href="/about"
              className="border border-gray-300 text-gray-700 font-medium py-4 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}