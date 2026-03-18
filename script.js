// script.js - Interactive JavaScript for the Portfolio

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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section, header').forEach(section => {
    observer.observe(section);
});

// Add loading animation class on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero background (simple)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero::before');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Form validation enhancement (for contact page)
if (document.querySelector('form[name="contactForm"]')) {
    const form = document.querySelector('form[name="contactForm"]');
    form.addEventListener('submit', function(e) {
        // Basic validation is already in HTML, but we can add more
        const inputs = form.querySelectorAll('input, textarea');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff0000';
                valid = false;
            } else {
                input.style.borderColor = '#ffd700';
            }
        });
        if (!valid) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
}