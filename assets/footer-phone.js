/**
 * Strive Soda - Footer Phone Slideshow
 * Auto-rotating image carousel for the footer phone widget
 */

class FooterPhoneSlideshow {
  constructor(element) {
    this.slideshow = element;
    this.wrapper = this.slideshow.querySelector('.phone-slideshow__wrapper');
    this.slides = Array.from(this.slideshow.querySelectorAll('.phone-slideshow__slide'));
    this.autoplaySpeed = parseInt(this.slideshow.dataset.autoplaySpeed) || 6000;
    this.currentIndex = 0;
    this.autoplayInterval = null;

    if (this.slides.length > 0) {
      this.init();
    }
  }

  init() {
    // Set first slide as active immediately
    this.slides[0].classList.add('active');
    this.slides[0].style.opacity = '1';

    // Start autoplay only if there are multiple slides
    if (this.slides.length > 1) {
      this.startAutoplay();
    }

    // Pause on hover
    this.slideshow.addEventListener('mouseenter', () => this.stopAutoplay());
    this.slideshow.addEventListener('mouseleave', () => this.startAutoplay());

    // Pause when tab is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopAutoplay();
      } else {
        if (this.slides.length > 1) {
          this.startAutoplay();
        }
      }
    });
  }

  goToSlide(index) {
    const currentSlide = this.slides[this.currentIndex];
    const nextSlide = this.slides[index];

    // Start fading out current slide
    currentSlide.classList.remove('active');

    // Start fading in next slide
    nextSlide.classList.add('active');

    // Update index
    this.currentIndex = index;
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  startAutoplay() {
    if (this.slides.length <= 1) return;

    this.stopAutoplay(); // Clear any existing interval
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoplaySpeed);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Initialize all footer phone slideshows on page load
document.addEventListener('DOMContentLoaded', () => {
  const slideshows = document.querySelectorAll('.phone-slideshow');
  slideshows.forEach(slideshow => {
    new FooterPhoneSlideshow(slideshow);
  });
});

// Reinitialize after Shopify section updates
document.addEventListener('shopify:section:load', () => {
  const slideshows = document.querySelectorAll('.phone-slideshow');
  slideshows.forEach(slideshow => {
    new FooterPhoneSlideshow(slideshow);
  });
});
