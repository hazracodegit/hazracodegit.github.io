// Ensure page loads from top
window.onload = () => {
  window.scrollTo(0, 0);
};

// Smooth scroll for internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple analytics-friendly console log
console.log("Hazra Bee Portfolio Loaded - Ready for Recruiter Review");