// Component Loader Utility
class ComponentLoader {
    constructor() {
        this.components = new Map();
    }

    async loadComponent(componentName, containerId) {
        try {
            // Check if we're running on file:// protocol (local development)
            if (window.location.protocol === 'file:') {
                console.log(`Skipping component loading for ${componentName} on file:// protocol`);
                return null;
            }
            
            const response = await fetch(`components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentName}`);
            }
            const html = await response.text();
            
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
                this.components.set(componentName, html);
                console.log(`Successfully loaded component: ${componentName}`);
                return html;
            } else {
                console.error(`Container with id "${containerId}" not found`);
            }
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
            // Fallback: try to load from a different path or show error message
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div class="text-red-500 p-4">Error loading ${componentName}: ${error.message}</div>`;
            }
        }
    }

    async loadHeader() {
        // Determine which header to load based on current page
        const currentPath = window.location.pathname;
        const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
        
        const headerComponent = isHomePage ? 'header-home' : 'header';
        return this.loadComponent(headerComponent, 'header-container');
    }

    async loadFooter() {
        // Determine which footer to load based on current page
        const currentPath = window.location.pathname;
        const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
        
        const footerComponent = isHomePage ? 'footer-home' : 'footer';
        return this.loadComponent(footerComponent, 'footer-container');
    }

    async loadAllComponents() {
        // Check if we're running on file:// protocol (local development)
        if (window.location.protocol === 'file:') {
            console.log('Skipping component loading on file:// protocol - using embedded headers/footers');
            // Still set active navigation state
            this.setActiveNavigation();
            // Initialize dark mode after navigation is set
            this.initializeDarkMode();
            return;
        }
        
        await Promise.all([
            this.loadHeader(),
            this.loadFooter()
        ]);
        
        // Set active navigation state after components are loaded
        this.setActiveNavigation();
        // Initialize dark mode after navigation is set
        this.initializeDarkMode();
    }

    setActiveNavigation() {
        const currentPath = window.location.pathname;
        const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
        
        // Determine current page
        let currentPage = 'home';
        if (!isHomePage) {
            if (currentPath.includes('about')) currentPage = 'about';
            else if (currentPath.includes('docs')) currentPage = 'docs';
            else if (currentPath.includes('research')) currentPage = 'research';
            else if (currentPath.includes('safety')) currentPage = 'safety';
            else if (currentPath.includes('careers')) currentPage = 'careers';
        }

        // Update navigation links
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            const page = link.getAttribute('data-page');
            if (page === currentPage) {
                // Active page styling - respect dark mode
                link.classList.remove('text-gray-600', 'hover:text-gray-900', 'dark:text-gray-300', 'dark:hover:text-white');
                link.classList.add('text-gray-900', 'dark:text-white', 'font-semibold');
            } else {
                // Inactive page styling - respect dark mode
                link.classList.remove('text-gray-900', 'dark:text-white', 'font-semibold');
                link.classList.add('text-gray-600', 'hover:text-gray-900', 'dark:text-gray-300', 'dark:hover:text-white');
            }
        });
    }

    initializeDarkMode() {
        // Check if dark mode is already initialized
        if (window.darkModeInitialized) {
            return;
        }

        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        const mobileSunIcon = document.getElementById('mobile-sun-icon');
        const mobileMoonIcon = document.getElementById('mobile-moon-icon');
        const darkModeText = document.getElementById('dark-mode-text');
        const mobileDarkModeText = document.getElementById('mobile-dark-mode-text');
        const html = document.documentElement;
        
        // Update icon visibility function
        const updateIcons = (isDark) => {
            // Desktop icons
            if (sunIcon && moonIcon) {
                sunIcon.classList.toggle('hidden', !isDark);
                moonIcon.classList.toggle('hidden', isDark);
            }
            // Mobile icons
            if (mobileSunIcon && mobileMoonIcon) {
                mobileSunIcon.classList.toggle('hidden', !isDark);
                mobileMoonIcon.classList.toggle('hidden', isDark);
            }
            // Desktop text
            if (darkModeText) {
                darkModeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            }
            // Mobile text
            if (mobileDarkModeText) {
                mobileDarkModeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            }
        };
        
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        console.log('Current theme:', currentTheme);
        console.log('HTML element:', html);
        
        // Apply the current theme
        if (currentTheme === 'dark') {
            html.classList.add('dark');
            updateIcons(true);
            console.log('Applied dark theme');
        } else {
            html.classList.remove('dark');
            updateIcons(false);
            console.log('Applied light theme');
        }
        
        // Toggle function
        const toggleDarkMode = () => {
            console.log('Dark mode toggle clicked');
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            console.log('Is dark mode:', isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcons(isDark);
            // Re-apply navigation styling after theme change
            setTimeout(() => this.setActiveNavigation(), 100);
        };
        
        // Add event listeners
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', toggleDarkMode);
            console.log('Desktop dark mode toggle initialized');
        } else {
            console.log('Desktop dark mode toggle not found');
        }
        
        if (mobileDarkModeToggle) {
            mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
            console.log('Mobile dark mode toggle initialized');
        } else {
            console.log('Mobile dark mode toggle not found');
        }

        // Initialize mobile menu toggle
        this.initializeMobileMenu();

        // Mark as initialized
        window.darkModeInitialized = true;
        
        // Add a global test function for debugging
        window.testDarkMode = () => {
            console.log('Testing dark mode manually...');
            const html = document.documentElement;
            const isCurrentlyDark = html.classList.contains('dark');
            console.log('Currently dark:', isCurrentlyDark);
            
            if (isCurrentlyDark) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                console.log('Switched to light mode');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                console.log('Switched to dark mode');
            }
            
            // Update icons manually
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');
            const mobileSunIcon = document.getElementById('mobile-sun-icon');
            const mobileMoonIcon = document.getElementById('mobile-moon-icon');
            
            const isDark = html.classList.contains('dark');
            if (sunIcon && moonIcon) {
                sunIcon.classList.toggle('hidden', !isDark);
                moonIcon.classList.toggle('hidden', isDark);
            }
            if (mobileSunIcon && mobileMoonIcon) {
                mobileSunIcon.classList.toggle('hidden', !isDark);
                mobileMoonIcon.classList.toggle('hidden', isDark);
            }
        };
    }

    initializeMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
                
                if (isOpen) {
                    // Close menu
                    mobileMenu.style.maxHeight = '0px';
                    mobileMenu.style.opacity = '0';
                    hamburgerIcon?.classList.remove('hidden');
                    closeIcon?.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                } else {
                    // Open menu
                    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                    mobileMenu.style.opacity = '1';
                    hamburgerIcon?.classList.add('hidden');
                    closeIcon?.classList.remove('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'true');
                }
            });
            console.log('Mobile menu toggle initialized');
        } else {
            console.log('Mobile menu elements not found');
        }
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing components...');
    componentLoader.loadAllComponents();
});

// Also try to initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    console.log('Document still loading, waiting for DOMContentLoaded...');
} else {
    console.log('Document already loaded, initializing components immediately...');
    componentLoader.loadAllComponents();
}

// Simple dark mode initialization that runs regardless of component loading
function initializeSimpleDarkMode() {
    console.log('Initializing simple dark mode...');
    
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    console.log('Current theme from localStorage:', currentTheme);
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        html.classList.add('dark');
        console.log('Applied dark theme to HTML element');
    } else {
        html.classList.remove('dark');
        console.log('Applied light theme to HTML element');
    }
    
    // Simple toggle function
    const toggleDarkMode = () => {
        console.log('Dark mode toggle clicked!');
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        console.log('Is dark mode now:', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update icons
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        const mobileSunIcon = document.getElementById('mobile-sun-icon');
        const mobileMoonIcon = document.getElementById('mobile-moon-icon');
        
        if (sunIcon && moonIcon) {
            sunIcon.classList.toggle('hidden', !isDark);
            moonIcon.classList.toggle('hidden', isDark);
            console.log('Updated desktop icons');
        }
        
        if (mobileSunIcon && mobileMoonIcon) {
            mobileSunIcon.classList.toggle('hidden', !isDark);
            mobileMoonIcon.classList.toggle('hidden', isDark);
            console.log('Updated mobile icons');
        }
    };
    
    // Add event listeners
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
        console.log('Added desktop dark mode listener');
    } else {
        console.log('Desktop dark mode toggle not found');
    }
    
    if (mobileDarkModeToggle) {
        mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
        console.log('Added mobile dark mode listener');
    } else {
        console.log('Mobile dark mode toggle not found');
    }
}

// Initialize simple dark mode immediately
initializeSimpleDarkMode();

// Also initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeSimpleDarkMode);
