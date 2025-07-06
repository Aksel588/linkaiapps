// Header and mobile menu logic for all pages
function openMobileMenu() {
    document.getElementById('mobile-menu').classList.add('active');
    var burger = document.getElementById('burger-menu');
    if (burger) burger.classList.add('active');
    var mobileBurger = document.getElementById('mobile-burger-menu');
    if (mobileBurger) mobileBurger.classList.add('active');
}
function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.remove('active');
    var burger = document.getElementById('burger-menu');
    if (burger) burger.classList.remove('active');
    var mobileBurger = document.getElementById('mobile-burger-menu');
    if (mobileBurger) mobileBurger.classList.remove('active');
}
// Attach event listeners after DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById('burger-menu');
    if (burger) burger.addEventListener('click', openMobileMenu);
    var mobileBurger = document.getElementById('mobile-burger-menu');
    if (mobileBurger) mobileBurger.addEventListener('click', openMobileMenu);
    var closeBtn = document.getElementById('close-mobile-menu');
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    // Mobile search button focuses the search input
    var mobileSearchBtn = document.getElementById('mobile-search-btn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', function() {
            var searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
                window.scrollTo({ top: searchInput.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }
        });
    }
}); 