// ===========================
// EDITABLE CONTENT
// ===========================

// 50-word birthday letter for Page 2
const birthdayLetter = `Every moment with you feels like a beautiful dream I never want to wake from. Your smile lights up my darkest days, and your love makes everything worthwhile. On this special day, I celebrate you—the amazing person you are and all the joy you bring into my life.`;

// Romantic text for Page 4
const romanticText = `You are my today and all of my tomorrows. With you, every moment becomes a cherished memory.`;

// Small message for Page 6
const smallMessage = `I could search the whole world and never find someone as perfect for me as you are. You make every day feel like magic.`;

// Final letter for Page 8
const finalLetter = `As you celebrate another year of your beautiful life, I want you to know how incredibly grateful I am to have you by my side. You are my inspiration, my joy, and my greatest adventure. May this year bring you endless happiness, unforgettable moments, and all the love your heart can hold. Here's to celebrating you today and always. Happy Birthday, my love!`;

// Photo slider 1 (Page 3) - Multiple images
const slider1Images = [
    { src: 'assets/photo1.jpg', caption: 'The day we first met - a moment I\'ll never forget' },
    { src: 'assets/photo2.jpg', caption: 'Your beautiful smile that brightens my world' },
    { src: 'assets/photo3.jpg', caption: 'The day we met, I could never forget. We started as besties, and without even realizing it, we became soulmates.' },
    { src: 'assets/photo4.jpg', caption: 'Our first picture together—we didn\'t even get it right. Look how awkward we were. ' },
    { src: 'assets/photo5.jpg', caption: 'You always look stunning, but in this picture even God was blown away by your beauty—He literally started blowing wind' },
    { src: 'assets/photo6.jpg', caption: 'Your feet may touch the ground, but your presence lifts my whole world' },
    { src: 'assets/photo7.jpg', caption: 'The first time I held your hand, it felt like I was holding the whole world in mine' },
    { src: 'assets/photo8.jpg', caption: 'Remember the day i was feeling very low , you are at fest in Kathua . this pic of your made me happiest person alive' }
];

// Photo slider 2 (Page 5) - 4 images
const slider2Images = [
    { src: 'assets/photo9.jpg', caption: 'You looking absolutely stunning as always but this one 🥹❤️❤️' },
    { src: 'assets/photo10.jpg', caption: 'The way you love me is defined by this i am very blessed to have you in my life' },
    { src: 'assets/photo11.jpg', caption: 'The moment you stepped out of the bus in this dress, my heart honestly skipped a beat—it felt like a mini heart attack' },
    { src: 'assets/photo12.jpg', caption: 'This is one of the most valuable and memorable days of my life—our first date, and in the temple too.' }
];

// Favorite photos slider (Page 7) - Now a slider instead of grid
const slider3Images = [
    { src: 'assets/photo13.jpg', caption: 'Till that day, we didn’t even have a single picture together—even after 2 years of being together. And then finally… we did this 😂😂❤️💕' },
    { src: 'assets/photo14.jpg', caption: 'Hundreds of calls, countless video calls… and somehow, even with 2285 km between us, it always felt like you were here with me' },
    { src: 'assets/photo15.jpg', caption: 'But i still remember the first picture you sent me😘🤭' },
    { src: 'assets/photo16.jpg', caption: 'And this one is my favorite picture of all time whenever i am feeling low i look at this picture' },
    { src: 'assets/photo17.jpg', caption: 'and you are cute as ever' },
    { src: 'assets/photo18.jpg', caption: 'Simply perfect, just like you' },
    { src: 'assets/photo19.jpg', caption: 'This one is the last picture we took together but memories we created is countless' }
];

// ===========================
// STATE MANAGEMENT
// ===========================
let currentPage = 1;
let sliderStates = {
    slider1: { currentIndex: 0, startX: 0, isDragging: false },
    slider2: { currentIndex: 0, startX: 0, isDragging: false },
    slider3: { currentIndex: 0, startX: 0, isDragging: false }
};

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initContent();
    initMusicControl();
    initSliders();
    initHeartAnimation();
    initConfetti();
    initSparkles();
    initFloatingHearts();
    initKeyboardNavigation();
});

// ===========================
// CONTENT INITIALIZATION
// ===========================
function initContent() {
    // Set birthday letter (Page 2)
    document.getElementById('birthdayLetter').textContent = birthdayLetter;
    
    // Set romantic text (Page 4)
    document.getElementById('romanticText').textContent = romanticText;
    
    // Set small message (Page 6)
    document.getElementById('smallMessage').textContent = smallMessage;
    
    // Set final letter (Page 8)
    document.getElementById('finalLetter').textContent = finalLetter;
}

// ===========================
// MUSIC CONTROL
// ===========================
function initMusicControl() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
            musicToggle.setAttribute('aria-label', 'Play background music');
        } else {
            bgMusic.play().catch(err => {
                console.log('Music play failed:', err);
            });
            musicToggle.innerHTML = '<span class="music-icon">⏸️</span>';
            musicToggle.setAttribute('aria-label', 'Pause background music');
        }
        isPlaying = !isPlaying;
    });
}

// ===========================
// PAGE NAVIGATION
// ===========================
function nextPage(pageNum) {
    const currentPageEl = document.querySelector('.page.active');
    const nextPageEl = document.getElementById(`page${pageNum}`);
    
    if (currentPageEl && nextPageEl) {
        currentPageEl.classList.remove('active');
        nextPageEl.classList.add('active');
        currentPage = pageNum;
        
        // Trigger image animation for current slide when page becomes active
        setTimeout(() => {
            triggerImageAnimation(pageNum);
        }, 100);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function triggerImageAnimation(pageNum) {
    let sliderId = null;
    if (pageNum === 3) sliderId = 'slider1';
    if (pageNum === 5) sliderId = 'slider2';
    if (pageNum === 7) sliderId = 'slider3';
    
    if (sliderId) {
        const container = document.getElementById(sliderId);
        const currentImg = container.children[sliderStates[sliderId].currentIndex];
        if (currentImg) {
            currentImg.style.animation = 'none';
            setTimeout(() => {
                currentImg.style.animation = '';
            }, 10);
        }
    }
}

// ===========================
// SLIDER FUNCTIONALITY
// ===========================
function initSliders() {
    initSlider('slider1', slider1Images);
    initSlider('slider2', slider2Images);
    initSlider('slider3', slider3Images);
}

function initSlider(sliderId, images) {
    const container = document.getElementById(sliderId);
    const captionEl = document.getElementById(`${sliderId}Caption`);
    const paginationEl = document.getElementById(`${sliderId}Pagination`);
    
    // Create image elements
    images.forEach((img, index) => {
        const imgEl = document.createElement('img');
        imgEl.src = img.src;
        imgEl.alt = img.caption;
        imgEl.loading = 'lazy'; // Lazy loading for performance
        container.appendChild(imgEl);
    });
    
    // Set initial caption and pagination
    updateSliderInfo(sliderId, images);
    
    // Touch support for mobile swipe
    addTouchSupport(sliderId, container);
}

function changeSlide(sliderId, direction) {
    const state = sliderStates[sliderId];
    let images;
    
    if (sliderId === 'slider1') images = slider1Images;
    else if (sliderId === 'slider2') images = slider2Images;
    else images = slider3Images;
    
    const totalImages = images.length;
    
    state.currentIndex += direction;
    
    // Loop around
    if (state.currentIndex < 0) {
        state.currentIndex = totalImages - 1;
    } else if (state.currentIndex >= totalImages) {
        state.currentIndex = 0;
    }
    
    // Update slider position with smooth animation
    const container = document.getElementById(sliderId);
    container.style.transform = `translateX(-${state.currentIndex * 100}%)`;
    
    // Trigger zoom animation for new image
    setTimeout(() => {
        const newImg = container.children[state.currentIndex];
        if (newImg) {
            newImg.style.animation = 'none';
            setTimeout(() => {
                newImg.style.animation = '';
            }, 10);
        }
    }, 100);
    
    // Update caption and pagination
    updateSliderInfo(sliderId, images);
}

function updateSliderInfo(sliderId, images) {
    const state = sliderStates[sliderId];
    const captionEl = document.getElementById(`${sliderId}Caption`);
    const paginationEl = document.getElementById(`${sliderId}Pagination`);
    
    // Fade out
    captionEl.style.opacity = '0';
    
    setTimeout(() => {
        captionEl.textContent = images[state.currentIndex].caption;
        paginationEl.textContent = `${state.currentIndex + 1} / ${images.length}`;
        
        // Fade in
        captionEl.style.opacity = '0.9';
    }, 200);
}

// ===========================
// TOUCH SUPPORT FOR SLIDERS
// ===========================
function addTouchSupport(sliderId, container) {
    const state = sliderStates[sliderId];
    
    container.addEventListener('touchstart', (e) => {
        state.startX = e.touches[0].clientX;
        state.isDragging = true;
    });
    
    container.addEventListener('touchmove', (e) => {
        if (!state.isDragging) return;
        e.preventDefault();
    });
    
    container.addEventListener('touchend', (e) => {
        if (!state.isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = state.startX - endX;
        
        // Swipe threshold: 50px
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swiped left - next image
                changeSlide(sliderId, 1);
            } else {
                // Swiped right - previous image
                changeSlide(sliderId, -1);
            }
        }
        
        state.isDragging = false;
    });
}

// ===========================
// HEART ANIMATION (Page 4)
// ===========================
function initHeartAnimation() {
    const particlesContainer = document.getElementById('heartParticles');
    
    // Create heart particles
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position around the heart
        const randomX = Math.random() * 200;
        const randomDelay = Math.random() * 2;
        
        particle.style.left = randomX + 'px';
        particle.style.bottom = '50%';
        particle.style.animationDelay = randomDelay + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }, 300);
}

// ===========================
// CONFETTI ANIMATION (Page 8)
// ===========================
function initConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b9d', '#c44569', '#feca57', '#48dbfb', '#ff9ff3', '#fff'];
    const shapes = ['circle', 'square', 'triangle'];
    
    // Create confetti pieces
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        
        // Random properties
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 4;
        const randomDuration = 3 + Math.random() * 2;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        
        confetti.style.left = randomX + '%';
        confetti.style.backgroundColor = randomColor;
        confetti.style.animationDelay = randomDelay + 's';
        confetti.style.animationDuration = randomDuration + 's';
        
        // Shape variations
        if (randomShape === 'square') {
            confetti.style.borderRadius = '0';
        } else if (randomShape === 'triangle') {
            confetti.style.borderRadius = '0';
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.borderLeft = '5px solid transparent';
            confetti.style.borderRight = '5px solid transparent';
            confetti.style.borderBottom = `10px solid ${randomColor}`;
            confetti.style.backgroundColor = 'transparent';
        }
        
        confettiContainer.appendChild(confetti);
    }
}

// ===========================
// SPARKLES ANIMATION
// ===========================
function initSparkles() {
    const sparkleContainers = ['sparkles1', 'sparkles2', 'sparkles3'];
    
    sparkleContainers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        setInterval(() => {
            createSparkle(container);
        }, 300);
    });
}

function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random position
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomDelay = Math.random() * 1;
    const randomDuration = 1 + Math.random() * 2;
    
    sparkle.style.left = randomX + '%';
    sparkle.style.top = randomY + '%';
    sparkle.style.animationDelay = randomDelay + 's';
    sparkle.style.animationDuration = randomDuration + 's';
    
    container.appendChild(sparkle);
    
    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, (randomDelay + randomDuration) * 1000);
}

// ===========================
// FLOATING HEARTS IN BACKGROUND
// ===========================
function initFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💓'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // Random horizontal position
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 8 + Math.random() * 4;
        
        heart.style.left = randomX + '%';
        heart.style.animationDelay = randomDelay + 's';
        heart.style.animationDuration = randomDuration + 's';
        
        container.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, (randomDelay + randomDuration) * 1000);
    }, 2000);
}

// ===========================
// KEYBOARD NAVIGATION
// ===========================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Arrow keys for slider navigation
        if (currentPage === 3) {
            if (e.key === 'ArrowLeft') changeSlide('slider1', -1);
            if (e.key === 'ArrowRight') changeSlide('slider1', 1);
        } else if (currentPage === 5) {
            if (e.key === 'ArrowLeft') changeSlide('slider2', -1);
            if (e.key === 'ArrowRight') changeSlide('slider2', 1);
        } else if (currentPage === 7) {
            if (e.key === 'ArrowLeft') changeSlide('slider3', -1);
            if (e.key === 'ArrowRight') changeSlide('slider3', 1);
        }
        
        // Enter key to go to next page
        if (e.key === 'Enter' && currentPage < 8) {
            nextPage(currentPage + 1);
        }
    });
}