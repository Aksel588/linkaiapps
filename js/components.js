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
        const darkModeText = document.getElementById('dark-mode-text');
        const html = document.documentElement;
        
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the current theme
        if (currentTheme === 'dark') {
            html.classList.add('dark');
            this.updateIcons(true);
        } else {
            this.updateIcons(false);
        }
        
        // Update icon visibility
        this.updateIcons = (isDark) => {
            if (sunIcon && moonIcon) {
                sunIcon.classList.toggle('hidden', !isDark);
                moonIcon.classList.toggle('hidden', isDark);
            }
            if (darkModeText) {
                darkModeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            }
        };
        
        // Toggle function
        const toggleDarkMode = () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            this.updateIcons(isDark);
            // Re-apply navigation styling after theme change
            setTimeout(() => this.setActiveNavigation(), 100);
        };
        
        // Add event listeners
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', toggleDarkMode);
        }
        if (mobileDarkModeToggle) {
            mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
        }

        // Mark as initialized
        window.darkModeInitialized = true;
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    componentLoader.loadAllComponents();
});
