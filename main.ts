console.log("Hello PlantiWiki");

const login = document.getElementById("login");

const loginPage = () => {
  console.log("Funciono");

  window.location.href = "login.html";
};

if (
  login !== null &&
  login !== undefined &&
  login instanceof HTMLAnchorElement
) {
  login.addEventListener("click", () => {
    loginPage();
  });
}

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
closeMenu?.addEventListener("click", () => {
  console.log("Funciono");
  hamburgerMenu?.classList.toggle("active");
});
