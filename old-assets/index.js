// ==================== NAVIGATION ====================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Animate hamburger
  const spans = navToggle.querySelectorAll('span');
  if (navMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translateY(8px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Smooth scroll and active link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu
    navMenu.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('.section, .hero');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

// ==================== HERO PARTICLES ====================
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

function createParticles() {
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation delay and duration
    particle.style.animationDelay = `${Math.random() * 20}s`;
    particle.style.animationDuration = `${15 + Math.random() * 10}s`;
    
    // Random size
    const size = 2 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// ==================== TYPING EFFECT ====================
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.innerHTML;
let displayText = '';
let isDeleting = false;
let charIndex = 0;

function typeEffect() {
  const fullText = "Hi, I'm <span class=\"gradient-text\">Murali Manohar G</span>";
  
  if (!isDeleting && charIndex < fullText.length) {
    displayText = fullText.substring(0, charIndex + 1);
    charIndex++;
    heroTitle.innerHTML = displayText;
    setTimeout(typeEffect, 50);
  } else if (isDeleting && charIndex > 0) {
    displayText = fullText.substring(0, charIndex - 1);
    charIndex--;
    heroTitle.innerHTML = displayText;
    setTimeout(typeEffect, 30);
  } else if (charIndex === fullText.length) {
    setTimeout(() => {
      isDeleting = false;
    }, 2000);
  } else if (charIndex === 0) {
    isDeleting = false;
    setTimeout(typeEffect, 500);
  }
}

// Start typing effect after page load
window.addEventListener('load', () => {
  setTimeout(typeEffect, 500);
});

// ==================== SCROLL REVEAL ANIMATION ====================
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ==================== TEXT HIGHLIGHT ON SCROLL - NUBIEN EFFECT ====================
const textElements = document.querySelectorAll('.hero-description, .about-content p, .project-description, p.text-reveal');

function highlightTextOnScroll() {
  textElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    const windowCenter = windowHeight / 2;
    
    // Check if element is in the center viewport area (Nubien style)
    if (elementTop < windowCenter + 100 && elementBottom > windowCenter - 100) {
      element.classList.add('highlighted');
    } else {
      element.classList.remove('highlighted');
    }
  });
}

// Initial check
highlightTextOnScroll();

// Check on scroll
window.addEventListener('scroll', highlightTextOnScroll);

// ==================== PROJECT CARDS HOVER EFFECT ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ==================== SKILL ITEMS ANIMATION ====================
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.05}s`;
});

// ==================== SMOOTH SCROLL FOR ALL LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Only prevent default for internal links
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== STATS COUNTER ANIMATION ====================
const stats = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateStats() {
  if (hasAnimated) return;
  
  const statsSection = document.querySelector('.about-stats');
  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (sectionTop < windowHeight - 100) {
    hasAnimated = true;
    
    stats.forEach(stat => {
      const text = stat.textContent;
      const hasPlus = text.includes('+');
      const hasPercent = text.includes('%');
      const number = parseInt(text.replace(/\D/g, ''));
      
      let current = 0;
      const increment = number / 50;
      const duration = 1500;
      const stepTime = duration / 50;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (hasPlus) displayValue += '+';
        if (hasPercent) displayValue += '%';
        
        stat.textContent = displayValue;
      }, stepTime);
    });
  }
}

window.addEventListener('scroll', animateStats);

// ==================== CURSOR TRAIL EFFECT (OPTIONAL) ====================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Throttle scroll events
let scrollTimeout;
const originalScrollHandler = window.onscroll;

window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  
  scrollTimeout = window.requestAnimationFrame(() => {
    // Scroll handlers are already attached above
  });
}, { passive: true });

// ==================== ACCESSIBILITY ====================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Focus trap for mobile menu
navToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navToggle.click();
  }
});

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  setTimeout(() => {
    revealOnScroll();
  }, 100);
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cFeel free to reach out: muralimanohargedda@gmail.com', 'font-size: 12px; color: #94a3b8;');
