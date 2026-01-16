gsap.registerPlugin(ScrollTrigger);

const ticker = document.querySelector('.partners-ticker');
if (ticker) {
    const tickerWidth = ticker.scrollWidth / 2;
    
    gsap.to('.partners-ticker', {
        x: -tickerWidth,
        duration: 20,
        ease: 'none',
        repeat: -1
    });
}

gsap.set('.map-filled', { clipPath: 'inset(100% 0 0 0)' });

gsap.to('.map-filled', {
    clipPath: 'inset(0% 0 0 0)',
    duration: 2.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.croatia-map-container',
        start: 'top 80%'
    }
});

gsap.from('.hero-text h1', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.hero-text p', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.15,
    ease: 'power2.out'
});

gsap.from('.cta-buttons', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
});

gsap.from('.hero-image', {
    opacity: 0,
    scale: 0.98,
    duration: 1,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.from('.floating-card', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.6,
    stagger: 0.15,
    ease: 'power2.out'
});

gsap.from('.app-text', {
    scrollTrigger: {
        trigger: '.app-section',
        start: 'top 75%'
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.phone-frame', {
    scrollTrigger: {
        trigger: '.app-section',
        start: 'top 75%'
    },
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.15,
    ease: 'power2.out'
});

gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 80%'
    },
    opacity: 0,
    x: -20,
    duration: 0.7,
    ease: 'power2.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 80%'
    },
    opacity: 0,
    x: 20,
    duration: 0.7,
    delay: 0.1,
    ease: 'power2.out'
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
