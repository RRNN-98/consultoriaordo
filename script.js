document.addEventListener('DOMContentLoaded', () => {
    // 3D Logo Effect
    const logoContainer = document.querySelector('.logo-3d-container');
    const logoWrapper = document.querySelector('.logo-wrapper');
    const hero = document.querySelector('.hero');

    if (logoContainer && logoWrapper) {
        hero.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

            logoWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset on mouse leave
        hero.addEventListener('mouseleave', () => {
            logoWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
            logoWrapper.style.transition = 'all 0.5s ease';
        });

        hero.addEventListener('mouseenter', () => {
            logoWrapper.style.transition = 'none';
        });
    }

    // Fade Up Animation on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.hero-headline, .hero-copy, .hero-subheadline, .cta-button, .authority-item, .card, .final-title, .final-desc');

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
});
