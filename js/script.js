// FAQ Data
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
];

// State management
let openItems = [];

// DOM elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const faqContainer = document.getElementById('faq-container');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeFAQ();
    initializeScrollHandlers();
    initializeButtonHandlers();
    initializeDarkMode();
});

// Mobile Menu Functionality
function initializeMobileMenu() {
    if (!mobileMenuButton || !mobileMenu) return;

    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('mousedown', function(event) {
        if (mobileMenu.classList.contains('mobile-menu-open')) {
            const target = event.target;
            if (!target.closest('nav')) {
                closeMobileMenu();
            }
        }
    });
}

function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('mobile-menu-open');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    mobileMenu.classList.add('mobile-menu-open');
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
    mobileMenuButton.setAttribute('aria-label', 'Close mobile menu');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('mobile-menu-open');
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.setAttribute('aria-label', 'Open mobile menu');
}

// FAQ Functionality
function initializeFAQ() {
    if (!faqContainer) return;

    // Render FAQ items
    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item">
            <button class="faq-button" onclick="toggleFAQ(${index})">
                <h3 class="faq-question">${item.question}</h3>
                <svg class="faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div class="faq-answer" id="faq-answer-${index}" style="display: none;">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const answerElement = document.getElementById(`faq-answer-${index}`);
    const faqItem = answerElement.closest('.faq-item');
    const arrow = faqItem.querySelector('.faq-arrow');
    
    const isOpen = openItems.includes(index);
    
    if (isOpen) {
        // Close the item
        answerElement.style.display = 'none';
        arrow.classList.remove('rotated');
        openItems = openItems.filter(item => item !== index);
    } else {
        // Open the item
        answerElement.style.display = 'block';
        arrow.classList.add('rotated');
        openItems.push(index);
    }
}

// Scroll Handlers
function initializeScrollHandlers() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Button Handlers
function initializeButtonHandlers() {
    // Try Aqwel AI button
    const tryAqwelBtn = document.getElementById('try-aqwel-btn');
    if (tryAqwelBtn) {
        tryAqwelBtn.addEventListener('click', handleTryAqwelAI);
    }

    // View Examples button
    const viewExamplesBtn = document.getElementById('view-examples-btn');
    if (viewExamplesBtn) {
        viewExamplesBtn.addEventListener('click', handleViewExamples);
    }
}

function handleTryAqwelAI() {
    // Open email to contact for trial
    window.location.href = 'mailto:aqwelai.company@gmail.com?subject=Request Aqwel AI Trial&body=Hi, I would like to request a trial of Aqwel AI. Please provide more information about your AI capabilities and pricing.';
}

function handleViewExamples() {
    // Scroll to the demo section
    const demoSection = document.querySelector('[id="features"]');
    if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleGetStarted() {
    // Scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleLearnMore() {
    // Scroll to the about section
    const aboutSection = document.querySelector('[id="about"]');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleViewDocs() {
    // Navigate to docs page
    window.location.href = '/docs';
}

function handleViewResearch() {
    // Navigate to research page
    window.location.href = '/research';
}

function handleContactUs() {
    // Open email contact
    window.location.href = 'mailto:aqwelai.company@gmail.com?subject=Contact Aqwel AI&body=Hi, I would like to get in touch with the Aqwel AI team.';
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add loading states to buttons
function addLoadingState(button) {
    button.classList.add('loading');
    button.disabled = true;
}

function removeLoadingState(button) {
    button.classList.remove('loading');
    button.disabled = false;
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.bg-white, .bg-gray-50');
    animatedElements.forEach(el => {
        // Set initial state but make sure content is visible
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Only apply animation if element is not in viewport initially
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInViewport) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            observer.observe(el);
        }
    });
});

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
}, 250));

// Handle escape key for mobile menu
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mobileMenu.classList.contains('mobile-menu-open')) {
        closeMobileMenu();
    }
});

// Preload critical resources
function preloadResources() {
    // Determine the correct base path based on current page location
    const isInPagesFolder = window.location.pathname.includes('/pages/');
    const basePath = isInPagesFolder ? '../' : '';
    
    const criticalImages = [
        `${basePath}images/logo_website.png`,
        `${basePath}images/favicon.ico`
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
});

// Dark Mode Functionality
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const darkModeText = document.getElementById('dark-mode-text');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    // Apply initial theme
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        updateDarkModeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateDarkModeIcons(false);
    }
    
    // Desktop toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Mobile toggle
    if (mobileDarkModeToggle) {
        mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.classList.add('dark');
                updateDarkModeIcons(true);
            } else {
                document.documentElement.classList.remove('dark');
                updateDarkModeIcons(false);
            }
        }
    });
}

function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateDarkModeIcons(false);
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateDarkModeIcons(true);
    }
}

function updateDarkModeIcons(isDarkMode) {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const darkModeText = document.getElementById('dark-mode-text');
    
    if (sunIcon && moonIcon) {
        if (isDarkMode) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }
    
    if (darkModeText) {
        darkModeText.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }
}

// Service Worker registration (if available and not on file:// protocol)
if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed:', err);
            });
    });
} else if (window.location.protocol === 'file:') {
    console.log('ServiceWorker registration skipped - running on file:// protocol');
}
