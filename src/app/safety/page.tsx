import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Safety() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Safety at Aqwel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building AI systems that are safe, reliable, and beneficial to humanity. Our commitment to responsible AI development ensures that our technology serves the greater good.
          </p>
        </div>
      </section>

      {/* Safety Principles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Safety Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow rigorous safety standards and ethical guidelines in all our AI research and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We maintain open communication about our AI systems, their capabilities, limitations, and potential risks. All our research is conducted transparently with clear documentation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accountability</h3>
              <p className="text-gray-600">
                We take full responsibility for the AI systems we develop and deploy. Our team is accountable for ensuring that our technology is used ethically and safely.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-Centered</h3>
              <p className="text-gray-600">
                Our AI systems are designed to augment human capabilities, not replace them. We prioritize human welfare and ensure our technology serves humanity's best interests.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
              <p className="text-gray-600">
                We proactively identify and mitigate potential risks associated with our AI systems. Our safety protocols include rigorous testing and continuous monitoring.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fairness</h3>
              <p className="text-gray-600">
                We ensure our AI systems are fair and unbiased. We actively work to eliminate discrimination and promote equitable outcomes across all user groups.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600">
                We continuously improve our safety practices through research, feedback, and collaboration with the global AI safety community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Safety Measures & Protocols
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive safety framework ensures responsible AI development and deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research Safety Review</h3>
                <p className="text-gray-600 mb-4">
                  All research projects undergo rigorous safety review before publication or deployment. Our safety committee evaluates potential risks and ensures compliance with ethical standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pre-deployment risk assessment</li>
                  <li>• Ethical impact evaluation</li>
                  <li>• Bias detection and mitigation</li>
                  <li>• Safety documentation requirements</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Open Source Safety</h3>
                <p className="text-gray-600 mb-4">
                  Our open-source approach allows for community scrutiny and collaborative safety improvements. Transparency is key to building trustworthy AI systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Public code review and auditing</li>
                  <li>• Community safety reporting</li>
                  <li>• Collaborative safety research</li>
                  <li>• Open safety documentation</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Privacy & Security</h3>
                <p className="text-gray-600 mb-4">
                  We implement robust data protection measures and privacy-preserving techniques to safeguard user information and research data.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• End-to-end encryption</li>
                  <li>• Privacy-preserving algorithms</li>
                  <li>• Data anonymization techniques</li>
                  <li>• Secure data storage protocols</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Responsible AI Development</h3>
                <p className="text-gray-600 mb-4">
                  We follow responsible AI development practices, including explainable AI, interpretability, and human oversight in critical decision-making processes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Explainable AI methodologies</li>
                  <li>• Human-in-the-loop systems</li>
                  <li>• Interpretability tools</li>
                  <li>• Ethical decision frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Research */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Safety Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We actively contribute to AI safety research and collaborate with leading institutions worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alignment Research</h3>
              <p className="text-gray-600 mb-6">
                We research methods to ensure AI systems remain aligned with human values and intentions, even as they become more capable.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Value learning and preference modeling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Robustness and reliability testing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Interpretability and explainability</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety Standards</h3>
              <p className="text-gray-600 mb-6">
                We develop and promote safety standards for AI development, contributing to industry best practices and regulatory frameworks.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Safety testing protocols</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Risk assessment frameworks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Ethical guidelines and policies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Safety Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our safety guidelines, research papers, and educational resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a 
              href="https://github.com/Aqwel-AI/Aqwel-Aion-Research" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Research</h3>
              <p className="text-gray-600 mb-4">Our latest safety research findings and methodologies in AI development.</p>
              <span className="text-gray-900 font-medium">View Research →</span>
            </a>
            
            <a 
              href="mailto:aqwelai.company@gmail.com" 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Concerns</h3>
              <p className="text-gray-600 mb-4">Report safety concerns or potential issues with our AI systems.</p>
              <span className="text-gray-900 font-medium">Contact Us →</span>
            </a>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Guidelines</h3>
              <p className="text-gray-600 mb-4">Comprehensive safety guidelines for AI development and deployment (Coming Soon).</p>
              <span className="text-gray-500 font-medium">Coming Soon →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Safety Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Help us build safer AI systems by contributing to our safety research and following our guidelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Aqwel-AI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Contribute to Safety
            </a>
            <a 
              href="mailto:aqwelai.company@gmail.com" 
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Report Safety Issues
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
