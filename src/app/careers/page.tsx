import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of AI research. Join a team of passionate innovators working on cutting-edge technology that will shape tomorrow's world.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Work at Aqwel AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a mission-driven company that's pushing the boundaries of AI research and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cutting-Edge Research</h3>
              <p className="text-gray-600">
                Work on the most exciting problems in AI, from space exploration to healthcare, with access to state-of-the-art tools and resources.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a diverse, inclusive team where your ideas matter. We foster collaboration, creativity, and continuous learning.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Source Impact</h3>
              <p className="text-gray-600">
                Contribute to open-source projects that benefit the global AI community. Your work will have a real impact on researchers worldwide.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Work</h3>
              <p className="text-gray-600">
                Enjoy flexible working hours, remote work options, and a healthy work-life balance that supports your personal and professional growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning & Growth</h3>
              <p className="text-gray-600">
                Access to conferences, courses, and mentorship opportunities. We invest in your professional development and career advancement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission-Driven</h3>
              <p className="text-gray-600">
                Be part of something bigger. Help us advance AI research in space, mathematics, and healthcare to benefit humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Check back soon for new opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Open Positions</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We don't have any open positions at the moment, but we're always interested in hearing from talented individuals who share our mission. Feel free to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:aqwelai.company@gmail.com?subject=General Application" 
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Us Your Resume
              </a>
              <a 
                href="https://www.linkedin.com/company/aqwelaiofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Follow Us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and contribute to our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
                  <p className="text-gray-600">We encourage creative thinking and bold ideas. Every team member has a voice in shaping our future.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">We invest in your growth with learning opportunities, conferences, and mentorship programs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Work-Life Balance</h3>
                  <p className="text-gray-600">We believe in sustainable productivity. Flexible hours and remote work options support your well-being.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diversity & Inclusion</h3>
                  <p className="text-gray-600">We celebrate diverse perspectives and create an inclusive environment where everyone belongs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Open Communication</h3>
                  <p className="text-gray-600">Transparent communication and regular feedback help us grow together as a team.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Impact-Driven</h3>
                  <p className="text-gray-600">Every project we work on has the potential to make a real difference in the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits to support your health, happiness, and professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive health insurance</li>
                <li>• Mental health support</li>
                <li>• Wellness stipend</li>
                <li>• Flexible PTO</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Conference attendance</li>
                <li>• Learning budget</li>
                <li>• Mentorship programs</li>
                <li>• Skill development courses</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Work Environment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Remote-first culture</li>
                <li>• Flexible hours</li>
                <li>• Modern equipment</li>
                <li>• Collaborative tools</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive salary</li>
                <li>• Equity participation</li>
                <li>• Performance bonuses</li>
                <li>• Retirement planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team & Culture</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Team building events</li>
                <li>• Company retreats</li>
                <li>• Recognition programs</li>
                <li>• Open source contributions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Latest hardware</li>
                <li>• Software licenses</li>
                <li>• Cloud computing access</li>
                <li>• Research resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't see a position that fits? We're always interested in hearing from talented individuals who share our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:aqwelai.company@gmail.com?subject=General Application" 
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Send Us Your Resume
            </a>
            <a 
              href="https://www.linkedin.com/company/aqwelaiofficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Follow Us on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
