import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Research() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Research at Aqwel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advancing artificial intelligence through cutting-edge research in space exploration, mathematics, and healthcare.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Research Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on six critical domains where AI can have the greatest impact on human progress and technological advancement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Space Exploration</h3>
              <p className="text-gray-600 mb-6">
                Developing AI models that simulate galaxies, space-time dynamics, orbital mechanics, and extraterrestrial environments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mathematics</h3>
              <p className="text-gray-600 mb-6">
                Building AI systems that discover new theorems, mathematical structures, and computational methods.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-600 mb-6">
                Applying AI to early diagnostics, health monitoring, and personalized medicine.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Programming & Software</h3>
              <p className="text-gray-600 mb-6">
                Advancing AI-assisted programming, code generation, software engineering, and automated development tools.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Safety & Ethics</h3>
              <p className="text-gray-600 mb-6">
                Ensuring AI systems are safe, aligned with human values, and beneficial to society through rigorous safety research.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Developing advanced ML algorithms, neural networks, and learning systems for complex problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aqwel-Aion Research Repository */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aqwel-Aion Research Repository
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research and demonstration of our AI library featuring 175+ functions across 12 modules.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">Aqwel-Aion-Research</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full text-center sm:text-left w-fit mx-auto sm:mx-0">
                    Public
                  </span>
                </div>
                
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed text-center sm:text-left">
                  Comprehensive research and demonstration of Aqwel-Aion AI library featuring 175+ functions across 12 modules for AI research, machine learning, and data science workflows. Includes interactive Jupyter notebook, performance benchmarks, and real-world use cases.
                </p>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">175+</div>
                    <div className="text-sm sm:text-base text-gray-600">Functions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">12</div>
                    <div className="text-sm sm:text-base text-gray-600">Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">96/100</div>
                    <div className="text-sm sm:text-base text-gray-600">Quality Score</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="https://github.com/Aqwel-AI/Aqwel-Aion-Research.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white font-medium py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center text-sm sm:text-base"
                  >
                    View on GitHub
                  </a>
                  <a 
                    href="https://pypi.org/project/aqwel-aion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center text-sm sm:text-base"
                  >
                    Install Library
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Research Highlights</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span>Interactive Jupyter notebook with live examples</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span>Performance benchmarks and analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span>Real-world use case demonstrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✓</span>
                  <span>Complete AI/ML workflow examples</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">•</span>
                  <span>Mathematics & Statistics (71+ functions)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">•</span>
                  <span>AI Research Tools & Embeddings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">•</span>
                  <span>Code Analysis & Quality Assessment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">•</span>
                  <span>Professional Documentation Generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
