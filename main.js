document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

  
  function toggleMenu() {
    const nav = document.querySelector('.right ul');
    nav.classList.toggle('show');
  }

  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".skills-section, .projects-section, .education-section, .contact-container").forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
