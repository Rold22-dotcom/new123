
// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navbar toggle
const menuBtn = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links');
const menuIcon = document.querySelector('#menu_btn i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuIcon.className = isOpen ? 'ri-close-line' : 'ri-menu-line';
});

// ScrollReveal animations
const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000
};

ScrollReveal().reveal('.left', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.right img', { ...scrollRevealOption, origin: 'right' });
ScrollReveal().reveal('.heading', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.para', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.box', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('.left_box', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.mid', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.right_box', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.left_box li', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.right_box li', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.blog_box', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.contact_left', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.contact_right', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.footer_col', { ...scrollRevealOption, delay: 500 });
