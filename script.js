// script.js

// Log to confirm JS is connected
console.log("Portfolio script is connected successfully!");

// Initialize AOS animations
AOS.init({
  duration: 1200,       // Animation duration (in ms)
  once: true,           // Animation happens only once while scrolling down
  easing: 'ease-in-out' // Easing function
});
// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1200, // Animation duration in ms
  once: true      // Animation happens only once while scrolling
});
// script.js

// Example: Smooth scroll to sections
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='#']");
  
  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
