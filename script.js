// Animación secuencial de portada
window.addEventListener("load", () => {
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");
  const cta = document.querySelector(".cta-btn");

  setTimeout(() => title.classList.add("animate-title"), 300);
  setTimeout(() => subtitle.classList.add("animate-subtitle"), 1000);
  setTimeout(() => (cta.style.opacity = 1), 1800);
});

// Animaciones al hacer scroll (cards + imagen)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document
  .querySelectorAll(".fade-in, .fade-in-delay, .partner-img-container")
  .forEach((el) => observer.observe(el));
