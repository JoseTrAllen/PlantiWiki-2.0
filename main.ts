const hamburgerButton = document.querySelector(".hamburger-svc");
const hamburgerMenu = document.querySelector(".toogle-menu");

if (
  hamburgerButton !== null &&
  hamburgerButton !== undefined &&
  hamburgerButton instanceof HTMLImageElement &&
  hamburgerMenu instanceof HTMLElement
) {
  hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.classList.add("active");
  });
}

const closeMenu = document.querySelector(".close-menu");
if (
  closeMenu !== null &&
  closeMenu !== undefined &&
  closeMenu instanceof HTMLImageElement &&
  hamburgerMenu instanceof HTMLElement
) {
  closeMenu.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
  });
}

const closeAnchors = document.querySelectorAll("a");

if (hamburgerMenu instanceof HTMLElement && closeAnchors.length > 0) {
  closeAnchors.forEach((anchor) => {
    if (anchor instanceof HTMLAnchorElement) {
      anchor.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
      });
    }
  });
}

const cards = document.querySelectorAll(".card");

// Crear el observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Añadir clase cuando sea visible
      observer.unobserve(entry.target); // Dejar de observar la tarjeta (opcional)
    }
  });
});

// Vincular el observador a cada tarjeta
cards.forEach((card) => {
  observer.observe(card);
});

console.log("Hello PlantiWiki");
