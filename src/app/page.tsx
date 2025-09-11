'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const handleTryAqwelAI = () => {
    // Open email to contact for trial
    window.location.href = 'mailto:aqwelai.company@gmail.com?subject=Request Aqwel AI Trial&body=Hi, I would like to request a trial of Aqwel AI. Please provide more information about your AI capabilities and pricing.'
  }

  const handleViewExamples = () => {
    // Scroll to the demo section
    const demoSection = document.querySelector('[id="features"]')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleGetStarted = () => {
    // Scroll to the contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLearnMore = () => {
    // Scroll to the about section
    const aboutSection = document.querySelector('[id="about"]')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewDocs = () => {
    // Navigate to docs page
    window.location.href = '/docs'
  }

  const handleViewResearch = () => {
    // Navigate to research page
    window.location.href = '/research'
  }

  const handleContactUs = () => {
    // Open email contact
    window.location.href = 'mailto:aqwelai.company@gmail.com?subject=Contact Aqwel AI&body=Hi, I would like to get in touch with the Aqwel AI team.'
  }

  const faqData = [
    {
      question: "What is the Aqwel-Aion Research Library?",
      answer: "The Aqwel-Aion Research Library is a comprehensive Python library featuring 175+ functions across 12 modules for AI research, machine learning, and data science workflows. It includes advanced mathematics, AI embeddings, model evaluation, code analysis, and professional documentation tools."
    },
    {
      question: "How do I install and get started with Aion?",
      answer: "Install Aion using pip: `pip install aqwel-aion`. Then import it in your Python script: `import aion`. Check out our research repository on GitHub for interactive Jupyter notebooks, examples, and comprehensive documentation to get started quickly."
    },
    {
      question: "What programming languages and frameworks does Aion support?",
      answer: "Aion is built for Python and integrates seamlessly with popular ML frameworks like TensorFlow, PyTorch, scikit-learn, and pandas. It also supports Jupyter notebooks for interactive development and provides APIs for web applications and data science workflows."
    },
    {
      question: "Can I use Aion for commercial projects?",
      answer: "Yes! Aion is designed for both research and commercial use. Our library is open-source and available on PyPI, making it perfect for startups, enterprises, and research institutions. Contact us for enterprise support and custom implementations."
    },
    {
      question: "What kind of AI research capabilities does Aion provide?",
      answer: "Aion offers advanced mathematics functions, AI embedding generation, model evaluation metrics, code complexity analysis, automated documentation generation, file management, and real-time monitoring. It's specifically designed to accelerate AI research and development workflows."
    },
    {
      question: "How does Aion ensure code quality and reliability?",
      answer: "Aion maintains a 96/100 quality score with comprehensive testing, type hints, detailed documentation, and continuous integration. Our library follows Python best practices and includes extensive error handling, making it production-ready for serious AI research and development."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Aqwel AI - Safe Artificial General Intelligence | Advanced AI Research</title>
        <meta name="description" content="Aqwel AI is building safe artificial general intelligence that benefits all of humanity. Advanced AI models for natural language processing, code generation, machine learning research, and creative applications. 175+ functions across 12 modules." />
        <meta name="keywords" content="artificial intelligence, AI, machine learning, natural language processing, code generation, safe AI, AGI, artificial general intelligence, AI research, AI safety, deep learning, neural networks, data science, AI library, Python AI, machine learning library, AI development, intelligent systems, AI innovation, research AI, AI tools, artificial intelligence research, AI technology, machine learning tools, AI programming, intelligent automation, AI algorithms, cognitive computing, AI solutions, advanced AI" />
        <meta property="og:title" content="Aqwel AI - Safe Artificial General Intelligence | Advanced AI Research" />
        <meta property="og:description" content="Building safe artificial general intelligence that benefits all of humanity. Advanced AI models for natural language processing, code generation, machine learning research, and creative applications." />
        <meta property="og:image" content="https://aqwel.ai/logo_website.png" />
        <meta property="og:url" content="https://aqwel.ai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aqwel AI - Safe Artificial General Intelligence" />
        <meta name="twitter:description" content="Building safe artificial general intelligence that benefits all of humanity. Advanced AI research and development." />
        <meta name="twitter:image" content="https://aqwel.ai/logo_website.png" />
        <meta name="twitter:site" content="@aqwelai" />
        <meta name="twitter:creator" content="@aqwelai" />
        <link rel="canonical" href="https://aqwel.ai" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-12 leading-tight tracking-tight font-tt-interphases">
              AI is the key to unlocking the deepest mysteries of the universe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Aqwel AI is building safe artificial general intelligence that benefits all of humanity. 
              Our mission is to ensure that AI systems are aligned with human values.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleTryAqwelAI}
                className="bg-gray-900 text-white font-medium py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg cursor-pointer"
              >
                Try Aqwel AI
              </button>
              <button 
                onClick={handleViewExamples}
                className="border border-gray-300 text-gray-700 font-medium py-4 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg cursor-pointer"
              >
                View Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50">
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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
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

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              See Aqwel AI in Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our latest demos, presentations, and resources to learn more about our technology and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Video Demo */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Product Demo</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    Watch our latest product demonstration showcasing Aqwel AI's capabilities 
                    in real-world scenarios and use cases.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <a 
                      href="#" 
                      className="block w-full bg-gray-900 text-white text-center py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm sm:text-base"
                    >
                      Watch Demo Video
                    </a>
                    <a 
                      href="#" 
                      className="block w-full border border-gray-300 text-gray-700 text-center py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-sm sm:text-base"
                    >
                      Try Interactive Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pitch Deck */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Pitch Deck</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    Download our comprehensive pitch deck to learn about our mission, 
                    technology, market opportunity, and investment details.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <a 
                      href="#" 
                      className="block w-full bg-gray-900 text-white text-center py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm sm:text-base"
                    >
                      View Pitch Deck
                    </a>
                    <a 
                      href="#" 
                      className="block w-full border border-gray-300 text-gray-700 text-center py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-sm sm:text-base"
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
      <section id="about" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Our mission
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Aqwel AI's mission is to ensure that artificial general intelligence (AGI) 
              benefits all of humanity. We are building safe, beneficial AI systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety First</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                We prioritize safety in AI development, ensuring our systems are aligned 
                with human values and beneficial to society.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovation</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                We push the boundaries of what's possible with AI, developing cutting-edge 
                technologies that solve real-world problems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Collaboration</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                We work with researchers, policymakers, and organizations worldwide to 
                ensure AI development benefits everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Seeking Investment Partners
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              We're looking for visionary investors who share our mission to build safe, 
              beneficial AI that benefits all of humanity.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-8 tracking-tight">Join Our Journey</h3>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
                  Aqwel AI is seeking strategic investors to accelerate our mission of building 
                  safe artificial intelligence for space, mathematics, and health research. We're looking for partners who understand 
                  the transformative potential of AI and share our commitment to safety and alignment.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-white mb-6">Why Partner With Us?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200">Proven foundation – Our first product, Aion, is already live and growing.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200">Global vision – Targeting the trillion-dollar markets of space, science, and health.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200">Dedicated team – Young, ambitious, and mission-driven innovators.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200">Safety-first approach – Responsible AI and alignment built into our work.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200">Massive opportunity – AI-powered science and research are the next frontier.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Investment Opportunity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Funding Round:</span>
                    <span className="text-white font-medium">Pre-Seed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Target Raise:</span>
                    <span className="text-white font-medium">$50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Use of Funds:</span>
                    <span className="text-white font-medium">Product development, cloud infrastructure, branding, and early growth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Minimum Investment:</span>
                    <span className="text-white font-medium">$5,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Aion Library Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Aqwel AI Aion v0.1.7
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto mb-12 font-light leading-relaxed">
              Aion is an open-source Python utility library by Aqwel AI, designed to empower AI research, 
              machine learning development, and advanced data science workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <code className="bg-gray-900 text-green-400 px-8 py-4 rounded-full font-mono text-lg">
                pip install aqwel-aion
              </code>
              <a 
                href="https://pypi.org/project/aqwel-aion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 text-lg"
              >
                View on PyPI
              </a>
              <a 
                href="https://github.com/aqwel-ai/aion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 text-lg"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Mathematics & ML Library</h3>
              <p className="text-gray-600 mb-4">71+ mathematical functions for AI/ML research</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Advanced Statistics & ML Tools</li>
                <li>• Signal Processing & FFT</li>
                <li>• Data Science Pipeline Tools</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Research Capabilities</h3>
              <p className="text-gray-600 mb-4">Text embeddings, prompt engineering, code analysis</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Text Embeddings & Similarity</li>
                <li>• 11+ AI Prompt Templates</li>
                <li>• Model Evaluation Metrics</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Documentation</h3>
              <p className="text-gray-600 mb-4">Automated PDF generation for research papers</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Research Paper Templates</li>
                <li>• API Documentation</li>
                <li>• User Guides & Tutorials</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Development Tools</h3>
              <p className="text-gray-600 mb-4">Advanced file management, real-time monitoring, Git integration</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Real-time Monitoring</li>
                <li>• Git Integration</li>
                <li>• 30+ Language Support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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

         
            
            
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
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
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
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
