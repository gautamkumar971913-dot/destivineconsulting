// script.js - Enhancements for Destivine Consulting Static Site

// Smooth scrolling for anchor links (e.g., CTAs)
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

// Fade-in animation on scroll for sections (premium storytelling effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections for fade-in
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form validation and submission handling (static site - shows success message)
const form = document.querySelector('.consultation-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const country = document.getElementById('country').value;
        
        if (!name || !email || !phone || !country) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate submission (in a real setup, integrate with a service like Formspree or Netlify Forms)
        alert('Thank you! Your consultation request has been submitted. We\'ll get back to you soon.');
        form.reset();
    });
}

// Optional: Add hover effects or other interactions if needed (e.g., for cards)
document.querySelectorAll('.service-card, .story-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});
