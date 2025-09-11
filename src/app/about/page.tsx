import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Us – Aqwel AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A pioneering artificial intelligence company dedicated to advancing human knowledge in the most challenging and ambitious fields: space, mathematics, and health.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Founded in 2025, we are building the tools and research engines that empower the next generation of scientists, students, and innovators to explore the unknown, solve complex problems, and unlock the future.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Beginning</h3>
              <p className="text-lg text-gray-600 mb-6">
                Aqwel AI was born out of a bold idea — that AI should not just serve as a tool for productivity or entertainment, but as a core driver of scientific discovery. We believe the greatest breakthroughs of the 21st century will come at the intersection of AI + Space, AI + Math, and AI + Health.
              </p>
              <p className="text-lg text-gray-600">
                The journey began with our first product, Aion, an open AI-powered library that helps researchers simulate, compute, and experiment with cutting-edge algorithms. Aion is not just software — it is a foundation upon which we will build a future of space exploration, advanced mathematics engines, and AI-driven health solutions.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 min-h-fit">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Exploration</h3>
                    <p className="text-gray-600 leading-relaxed">Creating AI models that simulate galaxies, space-time, orbital dynamics, and extraterrestrial environments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mathematics</h3>
                    <p className="text-gray-600 leading-relaxed">Building AI that not only solves equations but also discovers new theorems and structures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
                    <p className="text-gray-600 leading-relaxed">Applying AI to early diagnostics, health monitoring, and personalized medicine for a healthier future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our vision is to become a global AI research leader, on the level of DeepMind, OpenAI, and Anthropic — but with a sharper focus: "Empowering humanity through AI for space, science, and health."
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Advance Space Exploration – creating AI models that simulate galaxies, space-time, orbital dynamics, and extraterrestrial environments.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Reinvent Mathematics – building AI that not only solves equations but also discovers new theorems and structures.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-600">Transform Healthcare – applying AI to early diagnostics, health monitoring, and personalized medicine for a healthier future.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                Our mission is to accelerate global research by creating intelligent systems that bridge the gap between raw data and human discovery. We want every scientist, student, and researcher to have access to the most powerful AI tools to test ideas, explore the universe, and create solutions for humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aqwel AI is led by CEO & Founder: Aksel Aghajanyan, a young visionary developer and researcher from Armenia.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-48 h-48 flex-shrink-0">
                  {/* Black rounded square background with gradient */}
                  <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
                    {/* Circular frame with blue gradient */}
                    <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center p-2">
                      {/* Inner white circle for the photo */}
                      <div className="w-36 h-36 rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <Image 
                          src="/logo_ceo.png" 
                          alt="Aksel Aghajanyan CEO Logo" 
                          width={144} 
                          height={144}
                          className="w-36 h-36 object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Aksel Aghajanyan</h3>
                  <p className="text-xl text-gray-600 mb-4">CEO & Founder</p>
                  <p className="text-gray-600 mb-4">
                    With a background in backend development, AI research, and a passion for building open tools for the scientific community, Aksel drives Aqwel AI with the belief that "AI is the key to unlocking the deepest mysteries of the universe."
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Backend Development</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AI Research</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Open Source</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Armenia</span>
                  </div>
                  
                  {/* Social Networks */}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a 
                      href="https://linkedin.com/in/aksel-aghajanyan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    
                    <a 
                      href="https://github.com/Aksel588" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    
                    <a 
                      href="https://x.com/AkselDeveloper" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <span className="text-sm font-medium">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aion Product Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our First Product – Aion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aion (v0.1.7) is a comprehensive AI research library featuring 175+ functions across 12 modules for AI research, machine learning, and data science workflows. Includes interactive Jupyter notebooks, performance benchmarks, and real-world use cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Research</h3>
                    <p className="text-gray-600 leading-relaxed">175+ functions across 12 modules for comprehensive AI research, machine learning, and data science workflows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Jupyter Notebooks</h3>
                    <p className="text-gray-600 leading-relaxed">Interactive Jupyter notebooks with performance benchmarks and real-world use cases for comprehensive research demonstrations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Benchmarks</h3>
                    <p className="text-gray-600 leading-relaxed">Comprehensive performance analysis with sub-millisecond operations and 96/100 quality score for production-ready code.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Get Started with Aion</h3>
              <p className="text-gray-700 mb-6">
                Start your AI research journey with Aion's comprehensive library featuring 175+ functions, interactive Jupyter notebooks, and performance benchmarks.
              </p>
              <div className="flex flex-row gap-4">
                <a 
                  href="https://github.com/Aksel588/Aion.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors text-center font-medium"
                >
                  View on GitHub
                </a>
                <a 
                  href="https://github.com/Aqwel-AI/Aqwel-Aion-Research.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
                >
                  Research Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While Aion is our present, our future roadmap includes ambitious goals for AI-powered scientific discovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Large-Scale AI Models</h3>
              <p className="text-gray-600">
                Building large-scale AI models specialized in scientific computation and health diagnostics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Space Engines</h3>
              <p className="text-gray-600">
                Developing AI-powered space engines for simulating planetary systems and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Collaboration</h3>
              <p className="text-gray-600">
                Creating platforms where researchers can collaborate globally with AI as their partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our mission to advance human knowledge through AI. Connect with us and be part of the future of scientific discovery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="mailto:aqwelai.company@gmail.com" 
              className="bg-gray-800 rounded-lg p-6 min-h-fit hover:bg-gray-700 transition-colors block"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-center">Email</h3>
              <p className="text-gray-300 text-sm text-center break-all leading-relaxed">aqwelai.company@gmail.com</p>
            </a>
            <a 
              href="https://linkaiapps.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 min-h-fit hover:bg-gray-700 transition-colors block"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-center">Website</h3>
              <p className="text-gray-300 text-sm text-center break-all leading-relaxed">linkaiapps.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/company/aqwelaiofficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 min-h-fit hover:bg-gray-700 transition-colors block"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-center">LinkedIn</h3>
              <p className="text-gray-300 text-sm text-center break-words leading-relaxed">Aqwel AI Official</p>
            </a>
            <a 
              href="https://github.com/Aqwel-AI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 min-h-fit hover:bg-gray-700 transition-colors block"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2 text-center">GitHub</h3>
              <p className="text-gray-300 text-sm text-center break-words leading-relaxed">Aqwel AI</p>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center"
            >
              View Careers
            </Link>
            <a 
              href="mailto:aqwelai.company@gmail.com?subject=Contact Us" 
              className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
