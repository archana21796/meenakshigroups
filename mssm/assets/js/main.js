/**
* Template Name: Mentor
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Updated: Jul 07 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  // Get the header element
const header = document.getElementById('header');

// Get the height of the header so we know how far to scroll before showing it
const headerHeight = header.offsetHeight; 

// This function will be called on every scroll event
const handleScroll = () => {
  // Check if the user has scrolled past a certain point (e.g., the height of the header)
  if (window.scrollY > headerHeight) {
    // If they have, add the class to make the header visible
    header.classList.add('header-visible');
  } else {
    // If they haven't, ensure the class is removed
    header.classList.remove('header-visible');
  }
};

// Add the scroll event listener to the window
window.addEventListener('scroll', handleScroll);

})();
document.addEventListener('DOMContentLoaded', () => {

  // Function to perform the counting animation
  const animateCounter = (element, start, end, duration) => {
    let startTime;
    
    // The animation loop function
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      const progress = timestamp - startTime;
      const count = Math.min(Math.floor((progress / duration) * (end - start) + start), end);
      
      element.textContent = count;
      
      if (progress < duration) {
        // Continue the animation
        requestAnimationFrame(updateCount);
      } else {
        // Animation finished, set the final number and add the '+' suffix
        element.textContent = end + '+';
      }
    };
    
    // Start the animation loop
    requestAnimationFrame(updateCount);
  };
  
  // Create an IntersectionObserver to trigger animations when elements are in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterElement = entry.target;
        const startValue = parseInt(counterElement.getAttribute('data-purecounter-start') || 0, 10);
        const endValue = parseInt(counterElement.getAttribute('data-purecounter-end'), 10);
        const duration = parseInt(counterElement.getAttribute('data-purecounter-duration') || 1, 10) * 1000;
        
        // Start the animation for the counter
        animateCounter(counterElement, startValue, endValue, duration);
        
        // Unobserve the element once the animation has started to prevent re-triggering
        observer.unobserve(counterElement);
      }
    });
  });
  
  // Find all elements with the 'purecounter' class and observe them
  const counters = document.querySelectorAll('.purecounter');
  counters.forEach(counter => {
    observer.observe(counter);
  });
  
});
// document.addEventListener('DOMContentLoaded', () => {
//       const images = document.querySelectorAll('.fade-image');
//       let currentIndex = 0;
//       const intervalTime = 3000; 


// const showImage = (index) => {

//   images.forEach(img => img.classList.remove('active'));


//   if (images[index]) {
//     images[index].classList.add('active');
//   } else {
//     console.warn("Image at index", index, "does not exist");
//   }
// };


    //   const imageLoop = () => {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     showImage(currentIndex);
    //   };

    //   setInterval(imageLoop, intervalTime);
    // });