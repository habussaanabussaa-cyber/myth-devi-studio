// ==================== 
// ADVANCED ANIMATIONS
// ==================== 

/**
 * Parallax scroll effect untuk hero section
 */
function setupParallaxEffect() {
    const hero = document.querySelector('.hero');
    const floatingElements = document.querySelectorAll('.floating-element');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + index * 0.1;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });

        // Hero background effect
        if (hero) {
            hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
        }
    });
}

/**
 * Cursor glow effect untuk interactive elements
 */
function setupCursorGlowEffect() {
    const buttons = document.querySelectorAll('button, .nav-link, .game-card, .news-card');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--mouse-x', x + 'px');
            button.style.setProperty('--mouse-y', y + 'px');
        });
    });
}

/**
 * Pulse animation untuk logo
 */
function setupLogoAnimation() {
    const logo = document.querySelector('.logo-icon');
    
    if (logo) {
        setInterval(() => {
            logo.style.animation = 'pulse 2s infinite';
        }, 2000);
    }
}

/**
 * Text reveal animation untuk hero title
 */
function setupTextRevealAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let delay = 0;
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.animation = `slideDown 0.5s ease-out ${delay}s backwards`;
            span.style.display = 'inline-block';
            heroTitle.appendChild(span);
            delay += 0.05;
        }
    }
}

/**
 * Gradient animation untuk background
 */
function setupGradientAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradientShift {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        .gradient-animated {
            background: linear-gradient(
                45deg,
                rgba(0, 212, 255, 0.1),
                rgba(0, 160, 204, 0.1),
                rgba(0, 212, 255, 0.05)
            );
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Intersection Observer untuk fade-in effects
 */
function setupFadeInOnScroll() {
    const faders = document.querySelectorAll('.game-card, .news-card, .stat-card');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.style.opacity = '0';
        fader.style.transform = 'translateY(20px)';
        fader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        appearOnScroll.observe(fader);
    });
}

/**
 * Stagger animation untuk grid items
 */
function setupStaggerAnimation() {
    const gameCards = document.querySelectorAll('.game-card');
    const newsCards = document.querySelectorAll('.news-card');
    
    const allCards = [...gameCards, ...newsCards];
    
    allCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideInLeft 0.5s ease-out ${index * 0.1}s forwards`;
    });
}

/**
 * Hover glow effect untuk cards
 */
function setupHoverGlowEffect() {
    const cards = document.querySelectorAll('.game-card, .news-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const intensity = Math.sqrt(
                Math.pow(x - rect.width / 2, 2) + 
                Math.pow(y - rect.height / 2, 2)
            ) / Math.max(rect.width, rect.height);
            
            const glow = Math.max(0, 1 - intensity);
            card.style.setProperty('--glow-intensity', glow);
            
            // Update position
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--glow-intensity', '0');
        });
    });

    // Add CSS for glow effect
    const style = document.createElement('style');
    style.textContent = `
        .game-card, .news-card, .stat-card {
            position: relative;
            overflow: hidden;
        }

        .game-card:hover::before,
        .news-card:hover::before,
        .stat-card:hover::before {
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent);
            left: var(--mouse-x, 50%);
            top: var(--mouse-y, 50%);
            transform: translate(-50%, -50%);
            pointer-events: none;
            opacity: var(--glow-intensity, 0);
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Scroll progress bar
 */
function setupScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #00a8cc);
        z-index: 2000;
        width: 0%;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

/**
 * Smooth section transitions
 */
function setupSectionTransitions() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Button ripple effect
 */
function setupButtonRippleEffect() {
    const buttons = document.querySelectorAll('button, .social-link');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                pointer-events: none;
                animation: ripple-animation 0.6s ease-out;
            `;

            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Typewriter effect untuk subtitle
 */
function setupTypewriterEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let index = 0;
        const speed = 50;

        function type() {
            if (index < text.length) {
                subtitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        // Start after a delay
        setTimeout(type, 500);
    }
}

/**
 * Initialize all animations
 */
function initializeAnimations() {
    console.log('[ANIM] Initializing animations...');
    
    // Setup effects
    setupParallaxEffect();
    setupCursorGlowEffect();
    setupLogoAnimation();
    setupTextRevealAnimation();
    setupGradientAnimation();
    setupFadeInOnScroll();
    setupStaggerAnimation();
    setupHoverGlowEffect();
    setupScrollProgressBar();
    setupSectionTransitions();
    setupButtonRippleEffect();
    setupTypewriterEffect();
    
    console.log('[OK] Animations initialized successfully!');
}

/**
 * Run animations when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
    initializeAnimations();
}

/**
 * Performance optimization - throttle scroll events
 */
let lastScrollTime = 0;
const scrollThrottle = 16; // ~60fps

window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollTime > scrollThrottle) {
        lastScrollTime = now;
    }
}, { passive: true });

/**
 * Add CSS animations yang belum ada
 */
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
    }

    @keyframes glow {
        0%, 100% {
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        50% {
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
        }
    }
`;

document.head.appendChild(additionalStyles);
