// script.js

// Log to confirm JS is connected
console.log("Portfolio script is connected successfully!");

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1200,       // Animation duration in ms
  once: true,           // Animation happens only once while scrolling
  easing: 'ease-in-out' // Smooth easing
});

// Optional: Smooth scroll for anchor links (if you add internal links like #about, #contact)
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
// Typing animation
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to My Portfolio";
  const speed = 100;
  let i = 0;
  const target = document.getElementById("typed-text");

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
// Theme Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-theme");

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    
    // Optionally store user preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Load saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
