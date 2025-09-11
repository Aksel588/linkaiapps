'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Home() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      question: "What is Aqwel AI?",
      answer: "Aqwel AI is an advanced artificial intelligence platform that provides safe, beneficial AI systems designed to help with a wide range of tasks including natural language processing, code generation, creative writing, and analytical work."
    },
    {
      question: "How is Aqwel AI different from other AI platforms?",
      answer: "Aqwel AI focuses on safety, alignment, and beneficial outcomes. We prioritize building AI systems that are helpful, harmless, and honest, with a strong emphasis on ethical AI development and human value alignment."
    },
    {
      question: "Is Aqwel AI free to use?",
      answer: "We offer both free and paid tiers. Our free tier provides access to basic AI capabilities with usage limits, while our paid plans offer advanced features, higher usage limits, and priority support."
    },
    {
      question: "How do I get started with the API?",
      answer: "Getting started is simple: 1) Sign up for an account, 2) Get your API key from the dashboard, 3) Make your first API call using our documentation, 4) Start building amazing applications!"
    },
    {
      question: "What are the API rate limits?",
      answer: "Rate limits vary by plan. Free tier: 100 requests/hour, Basic: 1,000 requests/hour, Pro: 10,000 requests/hour, Enterprise: Custom limits. Contact us for enterprise pricing."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted in transit and at rest, we're SOC 2 compliant, and we never use your data to train our models. Your privacy and data security are our top priorities."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight ">
              Building safe artificial general intelligence that benefits all of humanity
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed  ">
              Aqwel AI is building safe artificial general intelligence that benefits all of humanity. 
              Our mission is to ensure that AI systems are aligned with human values.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="text-center  ">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 ">10M+</div>
                <div className="text-sm text-gray-600">Users worldwide</div>
              </div>
              <div className="text-center  ">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 ">99.9%</div>
                <div className="text-sm text-gray-600">Uptime reliability</div>
              </div>
              <div className="text-center  ">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 ">50+</div>
                <div className="text-sm text-gray-600">Languages supported</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12  ">
              <button className="bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800   ">
                Try Aqwel AI
              </button>
              <button className="border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50   ">
                View Examples
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200     ">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 ">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Lightning Fast</h3>
                <p className="text-gray-600 text-xs">Get instant responses with our optimized AI models</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200     ">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 ">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Secure & Private</h3>
                <p className="text-gray-600 text-xs">Enterprise-grade security with data protection</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200     ">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 ">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">AI Powered</h3>
                <p className="text-gray-600 text-xs">Advanced machine learning for better results</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8">
              <p className="text-xs text-gray-500 mb-4">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-4 opacity-60">
                <div className="text-lg font-bold text-gray-400">NVIDIA</div>
                <div className="text-lg font-bold text-gray-400">Microsoft</div>
                <div className="text-lg font-bold text-gray-400">Google</div>
                <div className="text-lg font-bold text-gray-400">Amazon</div>
                <div className="text-lg font-bold text-gray-400">Meta</div>
                <div className="text-lg font-bold text-gray-400">Apple</div>
                <div className="text-lg font-bold text-gray-400">Tesla</div>
                <div className="text-lg font-bold text-gray-400">OpenAI</div>
                <div className="text-lg font-bold text-gray-400">Netflix</div>
                <div className="text-lg font-bold text-gray-400">Spotify</div>
                <div className="text-lg font-bold text-gray-400">Uber</div>
                <div className="text-lg font-bold text-gray-400">Airbnb</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 ">
              Powerful capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto  ">
              Our AI models are designed to understand and generate human-like text, 
              making them useful for a wide range of applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200     ">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Processing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced language understanding and generation capabilities that can help with writing, 
                    analysis, coding, math, and much more.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200     ">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Generation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Generate, edit, and debug code in multiple programming languages with intelligent 
                    suggestions and explanations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200      ">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Reliable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built with safety in mind, our models are designed to be helpful, harmless, 
                    and honest in their responses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200      ">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Applications</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From creative writing to brainstorming ideas, our AI can assist with 
                    a wide range of creative and analytical tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo & Resources Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See Aqwel AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest demos, presentations, and resources to learn more about our technology and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Demo */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200  ">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Demo</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Watch our latest product demonstration showcasing Aqwel AI's capabilities 
                    in real-world scenarios and use cases.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="block w-full bg-gray-900 text-white text-center py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      Watch Demo Video
                    </a>
                    <a 
                      href="#" 
                      className="block w-full border border-gray-300 text-gray-700 text-center py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                    >
                      Try Interactive Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pitch Deck */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200  ">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pitch Deck</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Download our comprehensive pitch deck to learn about our mission, 
                    technology, market opportunity, and investment details.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="block w-full bg-gray-900 text-white text-center py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      View Pitch Deck
                    </a>
                    <a 
                      href="#" 
                      className="block w-full border border-gray-300 text-gray-700 text-center py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
              <p className="text-gray-600">Explore more about our technology and vision</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a href="#" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200   text-center group">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Technical Specs</h4>
                <p className="text-xs text-gray-600">Detailed specifications</p>
              </a>
              <a href="#" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200   text-center group">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Market Analysis</h4>
                <p className="text-xs text-gray-600">Industry insights</p>
              </a>
              <a href="#" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200   text-center group">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Use Cases</h4>
                <p className="text-xs text-gray-600">Real applications</p>
              </a>
              <a href="#" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200   text-center group">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">White Paper</h4>
                <p className="text-xs text-gray-600">Research document</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aqwel AI's mission is to ensure that artificial general intelligence (AGI) 
              benefits all of humanity. We are building safe, beneficial AI systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize safety in AI development, ensuring our systems are aligned 
                with human values and beneficial to society.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We push the boundaries of what's possible with AI, developing cutting-edge 
                technologies that solve real-world problems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We work with researchers, policymakers, and organizations worldwide to 
                ensure AI development benefits everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seeking Investment Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for visionary investors who share our mission to build safe, 
              beneficial AI that benefits all of humanity.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Join Our Journey</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Aqwel AI is seeking strategic investors to accelerate our mission of building 
                  safe artificial general intelligence. We're looking for partners who understand 
                  the transformative potential of AI and share our commitment to safety and alignment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200">Proven technology with 10M+ users</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200">World-class team from top institutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200">Safety-first approach to AI development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200">Massive market opportunity in AI</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Investment Opportunity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Funding Round:</span>
                    <span className="text-white font-medium">Series A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Target Raise:</span>
                    <span className="text-white font-medium">$10M - $25M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Use of Funds:</span>
                    <span className="text-white font-medium">R&D, Team, Infrastructure</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Minimum Investment:</span>
                    <span className="text-white font-medium">$100K</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-300 mb-4">Interested in learning more?</p>
                  <button className="w-full bg-white text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get started
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to explore the possibilities of AI? Start building with our powerful models today.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Try our API</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Integrate our AI models into your applications with our simple, powerful API. 
                  Get started in minutes with comprehensive documentation and examples.
                </p>
                <button className="bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  View Documentation
                </button>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join our community</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect with developers, researchers, and AI enthusiasts. Share ideas, 
                  get support, and stay updated on the latest developments.
                </p>
                <button className="border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aion Library Documentation Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Documentation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aqwel AI Aion v0.1.7
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Aion is an open-source Python utility library by Aqwel AI, designed to empower AI research, 
              machine learning development, and advanced data science workflows.
            </p>
          </div>

          {/* Quick Start Guide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Installation */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v2m0-6a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Installation</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Using pip (Recommended)</h4>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-green-400 text-sm overflow-x-auto">
                    pip install aqwel-aion
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">From source</h4>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-green-400 text-sm overflow-x-auto">
                    git clone https://github.com/aqwel-ai/aion.git<br/>
                    cd aion<br/>
                    pip install -e .
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Python 3.8+</li>
                    <li>• NumPy, SciPy, Pandas</li>
                    <li>• Matplotlib, Seaborn</li>
                    <li>• Scikit-learn</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Example */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quick Start</h3>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-green-400 text-sm overflow-x-auto">
                <div className="text-gray-400"># Import Aion</div>
                <div className="text-blue-400">import</div> <span className="text-yellow-400">aion</span><br/><br/>
                
                <div className="text-gray-400"># Mathematics & ML</div>
                <span className="text-yellow-400">result</span> = <span className="text-yellow-400">aion</span>.<span className="text-cyan-400">maths</span>.<span className="text-cyan-400">sigmoid</span>([<span className="text-orange-400">0</span>, <span className="text-orange-400">1</span>, <span className="text-orange-400">-1</span>])<br/>
                <span className="text-yellow-400">correlation</span> = <span className="text-yellow-400">aion</span>.<span className="text-cyan-400">maths</span>.<span className="text-cyan-400">correlation</span>([<span className="text-orange-400">1</span>,<span className="text-orange-400">2</span>,<span className="text-orange-400">3</span>], [<span className="text-orange-400">2</span>,<span className="text-orange-400">4</span>,<span className="text-orange-400">6</span>])<br/><br/>
                
                <div className="text-gray-400"># AI Embeddings</div>
                <span className="text-yellow-400">embedding</span> = <span className="text-yellow-400">aion</span>.<span className="text-cyan-400">embed</span>.<span className="text-cyan-400">embed_text</span>(<span className="text-green-400">"Hello AI"</span>)<br/><br/>
                
                <div className="text-gray-400"># Model Evaluation</div>
                <span className="text-yellow-400">metrics</span> = <span className="text-yellow-400">aion</span>.<span className="text-cyan-400">evaluate</span>.<span className="text-cyan-400">calculate_classification_metrics</span>(<span className="text-yellow-400">y_pred</span>, <span className="text-yellow-400">y_true</span>)
              </div>
            </div>
          </div>

          {/* Core Modules */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">maths</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">175+ mathematical functions for AI/ML research</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Statistics & ML tools</li>
                  <li>• Signal processing & FFT</li>
                  <li>• Linear algebra operations</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">embed</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">Text embeddings and similarity calculations</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Text embedding generation</li>
                  <li>• Cosine similarity</li>
                  <li>• Vector operations</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">evaluate</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">Model evaluation and metrics calculation</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Classification metrics</li>
                  <li>• Regression metrics</li>
                  <li>• Model validation</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">code</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">Code analysis and explanation tools</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Code explanation</li>
                  <li>• Complexity analysis</li>
                  <li>• Syntax validation</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">pdf</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">Documentation and PDF generation</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Research paper templates</li>
                  <li>• API documentation</li>
                  <li>• Automated PDF generation</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">files</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">File management and monitoring</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• File operations</li>
                  <li>• Real-time monitoring</li>
                  <li>• Git integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Installation Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <code className="bg-gray-900 text-green-400 px-6 py-3 rounded-lg font-mono text-lg">
                pip install aqwel-aion
              </code>
              <a 
                href="https://pypi.org/project/aqwel-aion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View on PyPI
              </a>
              <a 
                href="https://github.com/aqwel-ai/aion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Signal Processing</h3>
              <p className="text-gray-600 mb-4">FFT, convolution, filtering, and frequency analysis</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• FFT & Convolution</li>
                <li>• Filtering & Analysis</li>
                <li>• Frequency Processing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Revolutionary Features</h3>
              <p className="text-gray-600 mb-4">The most comprehensive AI research library ever created</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 175+ Mathematical Functions</li>
                <li>• 96/100 Quality Score</li>
                <li>• Production Ready</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Aion */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Aqwel AI-aion?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Revolutionary Breakthrough</h4>
                <p className="text-sm text-gray-600">Now the most comprehensive AI research library available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">World-Class Mathematics</h4>
                <p className="text-sm text-gray-600">175+ mathematical functions for AI/ML research</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Complete Research Pipeline</h4>
                <p className="text-sm text-gray-600">From data to publication-ready results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Production Ready</h4>
                <p className="text-sm text-gray-600">96/100 quality score with enterprise-grade reliability</p>
              </div>
            </div>
          </div>

          {/* Library Statistics */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Library Statistics</h3>
            </div>
            <p className="text-center text-gray-600 mb-8">v0.1.7 represents a quantum leap in AI research tools</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">13</div>
                <div className="text-gray-600">Core Modules</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">175+</div>
                <div className="text-gray-600">Functions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">96/100</div>
                <div className="text-gray-600">Quality Score</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
                <div className="text-gray-600">Languages</div>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Usage Example</h3>
            <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`import aion

# 🧮 Advanced Mathematics & ML
result = aion.maths.sigmoid([0, 1, -1])  # [0.5, 0.731, 0.269]
correlation = aion.maths.correlation([1,2,3,4], [2,4,6,8])  # 1.0
matrix_det = aion.maths.determinant([[1,2],[3,4]])  # -2.0

# 🔗 AI Embeddings & Similarity
embedding = aion.embed.embed_text("Machine learning research")
similarity = aion.embed.cosine_similarity(vec1, vec2)

# 📊 Model Evaluation
metrics = aion.evaluate.calculate_classification_metrics(y_pred, y_true)
reg_metrics = aion.evaluate.calculate_regression_metrics(pred, true)

# 🧠 Code Analysis
explanation = aion.code.explain_code("def train_model(): pass")
complexity = aion.code.analyze_complexity(source_code)

# 📄 Professional Documentation
docs = aion.pdf.generate_complete_documentation("my_docs")
api_docs = aion.pdf.create_api_documentation("api_ref.pdf")

# 🗂️ File Management & Monitoring
aion.files.create_empty_file("research.txt")
aion.watcher.watch_file_for_changes("data.csv", on_change_callback)`}
              </pre>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigator.clipboard.writeText(`import aion

# 🧮 Advanced Mathematics & ML
result = aion.maths.sigmoid([0, 1, -1])  # [0.5, 0.731, 0.269]
correlation = aion.maths.correlation([1,2,3,4], [2,4,6,8])  # 1.0
matrix_det = aion.maths.determinant([[1,2],[3,4]])  # -2.0

# 🔗 AI Embeddings & Similarity
embedding = aion.embed.embed_text("Machine learning research")
similarity = aion.embed.cosine_similarity(vec1, vec2)

# 📊 Model Evaluation
metrics = aion.evaluate.calculate_classification_metrics(y_pred, y_true)
reg_metrics = aion.evaluate.calculate_regression_metrics(pred, true)

# 🧠 Code Analysis
explanation = aion.code.explain_code("def train_model(): pass")
complexity = aion.code.analyze_complexity(source_code)

# 📄 Professional Documentation
docs = aion.pdf.generate_complete_documentation("my_docs")
api_docs = aion.pdf.create_api_documentation("api_ref.pdf")

# 🗂️ File Management & Monitoring
aion.files.create_empty_file("research.txt")
aion.watcher.watch_file_for_changes("data.csv", on_change_callback)`)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Copy Example
              </button>
              <a 
                href="https://pypi.org/project/aqwel-aion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Install Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 ">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto  ">
              Find answers to common questions about Aqwel AI. Can&apos;t find what you&apos;re looking for? 
              Contact our support team.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden "
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-gray-500  flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 ">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-8">
              Our support team is here to help. Get in touch and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@aqwel.ai" 
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Contact Support
              </a>
              <a 
                href="/docs" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
