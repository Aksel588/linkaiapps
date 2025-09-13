// Component Loader Utility
class ComponentLoader {
    constructor() {
        this.components = new Map();
    }

    async loadComponent(componentName, containerId) {
        try {
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
        await Promise.all([
            this.loadHeader(),
            this.loadFooter()
        ]);
        
        // Set active navigation state after components are loaded
        this.setActiveNavigation();
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
                link.classList.remove('text-gray-600', 'hover:text-gray-900');
                link.classList.add('text-gray-900', 'font-semibold');
            } else {
                link.classList.remove('text-gray-900', 'font-semibold');
                link.classList.add('text-gray-600', 'hover:text-gray-900');
            }
        });
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    componentLoader.loadAllComponents();
});
