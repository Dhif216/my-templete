// Laenlammen Tila Website JavaScript

// Smooth scroll to anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Handle anchor link clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add fade-in animation to elements as they scroll into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections for fade-in animation
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Form validation for booking
  const bookingForms = document.querySelectorAll('form');
  bookingForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation example
      const dateInput = this.querySelector('input[type="date"]');
      if (dateInput && !dateInput.value) {
        alert('Please select a date for your tour.');
        dateInput.focus();
        return;
      }

      // Show success message (in production, this would submit to backend)
      alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
    });
  });

  // Newsletter form
  const newsletterForms = document.querySelectorAll('form[action*="newsletter"]');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert('Thank you for subscribing! Check your email for confirmation.');
        emailInput.value = '';
      }
    });
  });

  // Image gallery functionality (if implemented)
  const galleryImages = document.querySelectorAll('[data-gallery]');
  galleryImages.forEach(image => {
    image.addEventListener('click', function() {
      // In production, this would open a lightbox
      console.log('Gallery image clicked:', this.src);
    });
  });

  // Booking quantity controls
  const quantityControls = document.querySelectorAll('[data-quantity-control]');
  quantityControls.forEach(control => {
    const minusBtn = control.querySelector('.quantity-minus');
    const plusBtn = control.querySelector('.quantity-plus');
    const input = control.querySelector('input[type="number"]');

    if (minusBtn && input) {
      minusBtn.addEventListener('click', () => {
        const current = parseInt(input.value);
        const min = parseInt(input.min) || 1;
        if (current > min) {
          input.value = current - 1;
          updateBookingPrice();
        }
      });
    }

    if (plusBtn && input) {
      plusBtn.addEventListener('click', () => {
        const current = parseInt(input.value);
        const max = parseInt(input.max) || 99;
        if (current < max) {
          input.value = current + 1;
          updateBookingPrice();
        }
      });
    }
  });

  // Update booking price calculation
  function updateBookingPrice() {
    const quantityInput = document.querySelector('#booking input[type="number"]');
    const pricePerPerson = 125; // This should come from data attribute
    
    if (quantityInput) {
      const quantity = parseInt(quantityInput.value) || 1;
      const total = pricePerPerson * quantity;
      
      // Update price display
      const priceElements = document.querySelectorAll('.booking-total');
      priceElements.forEach(element => {
        element.textContent = `€${total}`;
      });
    }
  }

  // Search functionality for blog
  const searchInput = document.querySelector('input[placeholder*="Search"]');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const searchTerm = this.value.toLowerCase();
        console.log('Searching for:', searchTerm);
        // In production, this would filter blog posts
      }, 300);
    });
  }

  // Add animation class to elements on scroll
  function addScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', addScrollAnimation);
  addScrollAnimation(); // Run on load

  // Handle header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  console.log('Läenlammen Tila website loaded successfully');
});

// Utility function for cookie consent (if needed)
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Export for use in other modules if needed
window.LaenlammenTila = {
  setCookie,
  getCookie
};
