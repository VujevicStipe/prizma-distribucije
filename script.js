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
