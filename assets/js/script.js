// =======================
// Theme Switcher
// =======================
const switchThemeBtn = document.getElementById('switchTheme');
let currentTheme = localStorage.getItem('theme') || 'dark';

function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);

    if (switchThemeBtn) {
        switchThemeBtn.innerHTML = theme === 'dark'
            ? '<i class="bi bi-sun-fill"></i>'
            : '<i class="bi bi-moon-stars-fill"></i>';
    }
}

setTheme(currentTheme);

switchThemeBtn?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
});

// =======================
// AOS Initialization
// =======================
AOS.init();

// =======================
// Scroll Effects: Fixed Header & Back-to-Top
// =======================
const header = document.getElementById('header');
const backToTopButton = document.getElementById('backToTopButton');

function handleScroll() {
    // Fixed Header
    if (window.scrollY > 30) header?.classList.add('fixed-top');
    else header?.classList.remove('fixed-top');

    // Back-to-Top Button
    if (backToTopButton) {
        backToTopButton.style.display = window.scrollY > 400 ? 'block' : 'none';
    }
}

// Debounce scroll for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScroll, 50);
});

// =======================
// Scroll to Top Function
// =======================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =======================
// Testimonial Slider - Owl Carousel
// =======================
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        nav: true,
        dots: true,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1170: { items: 3 }
        }
    });
});