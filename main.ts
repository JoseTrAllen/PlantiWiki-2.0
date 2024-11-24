const hamburgerButton = document.querySelector(".hamburger-svc");
const hamburgerMenu = document.querySelector(".toogle-menu");

if (
  hamburgerButton !== null &&
  hamburgerButton !== undefined &&
  hamburgerButton instanceof HTMLImageElement &&
  hamburgerMenu instanceof HTMLElement
) {
  hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
  });
  hamburgerButton.addEventListener("touchstart", () => {
    hamburgerMenu.classList.toggle("active");
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
    hamburgerMenu.classList.toggle("active");
  });
}

console.log("Hello PlantiWiki");
