const gamesData = [
    {
        id: 1,
        title: 'Myth Chronicles',
        description: 'Petualangan RPG epik dengan dunia yang immersive dan cerita yang mendalam.',
        icon: '<i class="fas fa-scroll"></i>',
        genre: 'RPG',
        status: 'Tersedia',
        year: 2025
    },
    {
        id: 2,
        title: 'Void Runners',
        description: 'Platformer action yang menantang dengan mekanik parkour futuristik.',
        icon: '<i class="fas fa-person-running"></i>',
        genre: 'Action',
        status: 'Tersedia',
        year: 2025
    },
    {
        id: 3,
        title: 'Crystal Quest',
        description: 'Puzzle adventure yang menggabungkan strategi dan eksplorasi.',
        icon: '<i class="fas fa-wand-magic-sparkles"></i>',
        genre: 'Puzzle',
        status: 'Coming Soon',
        year: 2026
    },
    {
        id: 4,
        title: 'Neon Nexus',
        description: 'Shooter cyberpunk dengan grafis retro wave yang memukau.',
        icon: '<i class="fas fa-gun"></i>',
        genre: 'Shooter',
        status: 'Development',
        year: 2026
    },
    {
        id: 5,
        title: 'Shadow Realm',
        description: 'Horror survival dengan atmosfer yang menakutkan dan gameplay yang intens.',
        icon: '<i class="fas fa-ghost"></i>',
        genre: 'Horror',
        status: 'Development',
        year: 2026
    },
    {
        id: 6,
        title: 'Legends of Aether',
        description: 'MOBA strategy dengan karakter unik dan battle system yang kompleks.',
        icon: '<i class="fas fa-chess-king"></i>',
        genre: 'Strategy',
        status: 'Tersedia',
        year: 2025
    },
    {
        id: 7,
        title: 'Starforge Odyssey',
        description: 'Space exploration RPG dengan crafting system dan customizable spaceship.',
        icon: '<i class="fas fa-rocket"></i>',
        genre: 'Adventure',
        status: 'Development',
        year: 2026
    },
    {
        id: 8,
        title: 'Chronos Escape',
        description: 'Puzzle platformer dengan mekanik manipulasi waktu yang inovatif.',
        icon: '<i class="fas fa-hourglass-end"></i>',
        genre: 'Puzzle',
        status: 'Tersedia',
        year: 2025
    },
    {
        id: 9,
        title: 'Dragon Wars Online',
        description: 'MMORPG dengan world berkembang dinamis dan PvP yang seru.',
        icon: '<i class="fas fa-dragon"></i>',
        genre: 'MMORPG',
        status: 'Development',
        year: 2026
    },
    {
        id: 10,
        title: 'Pixel Apocalypse',
        description: 'Roguelike survival dengan voxel graphics dan permadeath mechanics.',
        icon: '<i class="fas fa-virus"></i>',
        genre: 'Survival',
        status: 'Coming Soon',
        year: 2026
    },
    {
        id: 11,
        title: 'Mystic Garden',
        description: 'Cozy farming simulation dengan elemen magic dan puzzle yang relaxing.',
        icon: '<i class="fas fa-leaf"></i>',
        genre: 'Simulation',
        status: 'Tersedia',
        year: 2025
    },
    {
        id: 12,
        title: 'Void Protocol',
        description: 'Cyberpunk hacking game dengan branching storyline dan multiple endings.',
        icon: '<i class="fas fa-laptop"></i>',
        genre: 'Adventure',
        status: 'Development',
        year: 2026
    }
];

// ==================== 
// NEWS DATA
// ==================== 
const newsData = [
    {
        id: 1,
        title: 'Myth Chronicles Mendapat Update Besar',
        date: '18 Januari 2026',
        excerpt: 'Update terbaru menambahkan 5 area dungeon baru, 20+ item legendaris, dan sistem farming yang diperbaiki.'
    },
    {
        id: 2,
        title: 'Void Runners Mencapai 100K Downloads',
        date: '15 Januari 2026',
        excerpt: 'Terima kasih kepada semua pemain yang telah mendukung Void Runners. Sebagai apresiasi, kami siapkan event spesial.'
    },
    {
        id: 3,
        title: 'Crystal Quest Trailer Resmi Dirilis',
        date: '12 Januari 2026',
        excerpt: 'Tonton trailer gameplay Crystal Quest kami yang baru di YouTube. Game akan launching tahun ini!'
    },
    {
        id: 4,
        title: 'Myth Devi Studio Membuka Rekrutmen',
        date: '10 Januari 2026',
        excerpt: 'Kami membuka lowongan untuk Game Designer, Programmer, dan Artist. Bergabunglah dengan tim kami!'
    },
    {
        id: 5,
        title: 'Partnership Dengan Publisher Internasional',
        date: '8 Januari 2026',
        excerpt: 'Kami dengan bangga mengumumkan partnership strategis dengan publisher game terkemuka.'
    },
    {
        id: 6,
        title: 'Next Gen Engine Adoption',
        date: '5 Januari 2026',
        excerpt: 'Myth Devi Studio akan menggunakan engine terbaru untuk project-project mendatang dengan grafis ultra realistis.'
    }
];

// ==================== 
// DOM RENDERING FUNCTIONS
// ==================== 

/**
 * Render games ke dalam grid
 */
function renderGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    gamesGrid.innerHTML = gamesData.map(game => `
        <div class="game-card" onclick="showGameDetail(${game.id})">
            <div class="game-image">${game.icon}</div>
            <div class="game-content">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <div class="game-meta">
                    <span class="game-badge">${game.genre}</span>
                    <span class="game-badge">${game.status}</span>
                    <span class="game-badge">${game.year}</span>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Render news ke dalam grid
 */
function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    
    newsGrid.innerHTML = newsData.map(news => `
        <div class="news-card" onclick="showNewsDetail(${news.id})">
            <p class="news-date"><i class="fas fa-calendar-alt"></i> ${news.date}</p>
            <h4 class="news-title">${news.title}</h4>
            <p class="news-excerpt">${news.excerpt}</p>
        </div>
    `).join('');
}

/**
 * Tampilkan detail game
 */
function showGameDetail(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (game) {
        alert(`
🎮 ${game.title}
━━━━━━━━━━━━━━━━
Deskripsi: ${game.description}
Genre: ${game.genre}
Status: ${game.status}
Tahun: ${game.year}

Klik untuk informasi lebih lanjut atau download!
        `);
    }
}

/**
 * Tampilkan detail news
 */
function showNewsDetail(newsId) {
    const news = newsData.find(n => n.id === newsId);
    if (news) {
        alert(`
📰 ${news.title}
━━━━━━━━━━━━━━━━
Tanggal: ${news.date}
${news.excerpt}
        `);
    }
}

// ==================== 
// HAMBURGER MENU FUNCTIONALITY
// ==================== 

/**
 * Toggle hamburger menu
 */
function toggleHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
}

/**
 * Setup hamburger menu event listener
 */
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    
    if (hamburger) {
        hamburger.addEventListener('click', toggleHamburgerMenu);
    }

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');
            
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navbar = document.querySelector('.navbar');
        
        if (hamburger && navMenu && navbar) {
            if (!navbar.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
}

// ==================== 
// NAVIGATION FUNCTIONS
// ==================== 
// FORM HANDLING
// ==================== 

/**
 * Handle contact form submission
 */
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Simulasi pengiriman form
    if (name && email && message) {
        alert(`
[OK] Pesan Terkirim!
━━━━━━━━━━━━━━━━
Terima kasih ${name},
Kami akan menghubungi Anda melalui ${email} dalam waktu 24 jam.

Pesan Anda:
"${message.substring(0, 50)}..."
        `);
        
        // Reset form
        form.reset();
    }
}

// ==================== 
// SCROLL ANIMATIONS
// ==================== 

/**
 * Animasi elemen ketika masuk viewport
 */
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe game cards
    document.querySelectorAll('.game-card').forEach(card => {
        observer.observe(card);
    });

    // Observe news cards
    document.querySelectorAll('.news-card').forEach(card => {
        observer.observe(card);
    });

    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        observer.observe(card);
    });
}

/**
 * Smooth scroll untuk navigation links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

/**
 * Highlight active navigation link berdasarkan scroll position
 */
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== 
// COUNTER ANIMATION
// ==================== 

/**
 * Animasi counter untuk statistik
 */
function animateCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('h4');
                counters.forEach(counter => {
                    const target = counter.textContent;
                    animateValue(counter, 0, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        observer.observe(aboutStats);
    }
}

/**
 * Animasi nilai dari 0 ke target
 */
function animateValue(element, start, end) {
    // Ekstrak angka dari string
    const match = end.match(/\d+/);
    if (!match) return;
    
    const target = parseInt(match[0]);
    const suffix = end.replace(/\d+/, '');
    const duration = 2000;
    const startTime = Date.now();

    function update() {
        const now = Date.now();
        const progress = (now - startTime) / duration;

        if (progress < 1) {
            const current = Math.floor(start + (target - start) * progress);
            element.textContent = current + suffix;
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    }

    update();
}

// ==================== 
// INITIALIZATION
// ==================== 

/**
 * Initialize semua fungsi ketika DOM loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render content
    renderGames();
    renderNews();
    
    // Setup hamburger menu
    setupHamburgerMenu();
    
    // Setup event listeners
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Setup scroll effects
    setupSmoothScroll();
    highlightActiveNavLink();
    observeElements();
    animateCounters();
    initializeCarousel();

    // Log initialization
    console.log('[OK] Myth Devi Studio website loaded successfully!');
    console.log('Games loaded:', gamesData.length);
    console.log('News loaded:', newsData.length);
});

// ==================== 
// CAROUSEL FUNCTIONALITY
// ==================== 

let currentSlide = 0;
let totalSlides = 0;

/**
 * Initialize carousel for games section
 */
function initializeCarousel() {
    const gamesCarousel = document.getElementById('gamesCarousel');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselIndicators = document.getElementById('carouselIndicators');

    if (!gamesCarousel) return;

    totalSlides = gamesData.length;
    currentSlide = 0;

    // Create carousel indicators
    if (carouselIndicators) {
        carouselIndicators.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
            indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
            indicator.addEventListener('click', () => goToSlide(i));
            carouselIndicators.appendChild(indicator);
        }
    }

    // Debounce carousel navigation to prevent rapid clicks
    let isNavigating = false;
    const navigationCooldown = 600; // milliseconds

    function navigateCarousel(direction) {
        if (isNavigating) return; // Prevent rapid navigation
        
        isNavigating = true;
        if (direction === 'next') {
            currentSlide = (currentSlide + 1) % totalSlides;
        } else {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        }
        scrollToSlide(currentSlide);
        updateIndicators();
        
        setTimeout(() => {
            isNavigating = false;
        }, navigationCooldown);
    }

    // Previous button
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            navigateCarousel('prev');
        });
    }

    // Next button
    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            navigateCarousel('next');
        });
    }

    // Touch/Swipe support
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let isSwipeInProgress = false;

    gamesCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        isSwipeInProgress = true;
    }, false);

    gamesCarousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
        isSwipeInProgress = false;
    }, false);

    function handleSwipe() {
        const swipeThreshold = 80; // Increased from 50 for less sensitivity
        const verticalThreshold = 50; // Ignore if vertical movement too much
        const horizontalDiff = touchStartX - touchEndX;
        const verticalDiff = Math.abs(touchStartY - touchEndY);

        // Only process if horizontal movement is significant and vertical is minimal
        if (Math.abs(horizontalDiff) > swipeThreshold && verticalDiff < verticalThreshold) {
            if (horizontalDiff > 0) {
                // Swiped left - go to next
                currentSlide = (currentSlide + 1) % totalSlides;
            } else {
                // Swiped right - go to previous
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            }
            scrollToSlide(currentSlide);
            updateIndicators();
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const gameSection = document.getElementById('games');
        if (!gameSection) return;

        const rect = gameSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInView) {
            if (e.key === 'ArrowLeft') {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                scrollToSlide(currentSlide);
                updateIndicators();
            } else if (e.key === 'ArrowRight') {
                currentSlide = (currentSlide + 1) % totalSlides;
                scrollToSlide(currentSlide);
                updateIndicators();
            }
        }
    });
}

/**
 * Scroll to specific slide
 */
function scrollToSlide(slideIndex) {
    const gamesCarousel = document.getElementById('gamesCarousel');
    const gameCards = gamesCarousel.querySelectorAll('.game-card');

    if (gameCards[slideIndex]) {
        gameCards[slideIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    }
}

/**
 * Go to specific slide
 */
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    scrollToSlide(currentSlide);
    updateIndicators();
}

/**
 * Update indicator buttons
 */
function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// ==================== 
// UTILITY FUNCTIONS
// ==================== 

/**
 * Debounce function untuk optimasi scroll listeners
 */
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

/**
 * Preload images
 */
function preloadImages() {
    const images = gamesData.map(game => game.icon);
    images.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img;
        document.head.appendChild(link);
    });
}

// ==================== 
// ERROR HANDLING
// ==================== 

/**
 * Handle JavaScript errors
 */
window.addEventListener('error', (event) => {
    console.error('Error occurred:', event.error);
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
