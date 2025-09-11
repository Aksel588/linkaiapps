'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('nav')) {
          closeMobileMenu()
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/docs', label: 'Docs' },
    { href: '/research', label: 'Research' },
    { href: '/safety', label: 'Safety' },
    { href: '/careers', label: 'Careers' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group" onClick={closeMobileMenu}>
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-200">
                  <Image 
                    src="/logo_website.png" 
                    alt="Aqwel AI Logo" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <span className="text-1xl md:text-2xl font-bold text-gray-900">
                Aqwel AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href 
                    ? 'text-gray-900 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="mailto:aqwelai.company@gmail.com?subject=Get Started with Aqwel AI" 
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 relative z-40">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-gray-900 bg-gray-100 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="mailto:aqwelai.company@gmail.com?subject=Get Started with Aqwel AI"
                onClick={closeMobileMenu}
                className="block w-full bg-gray-900 text-white text-center px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}