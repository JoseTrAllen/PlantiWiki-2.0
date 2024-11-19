import { fecthPlants } from "./src/api/api";
console.log("Hello PlantiWiki");
/* console.log(fecthPlants()); */

const login = document.getElementById("login");

const loginPage = () => {
  window.location.href = "./src/login/index.html";
};

login?.addEventListener("click", () => {
  console.log("Funciono");
  loginPage();
});

let lastScrollY = window.scrollY; // initial scroll position

window.addEventListener("scroll", () => {
  const div = document.getElementById("hide-menu-div");
  const hamburger = document.querySelector(".hamburger-div");
  if (window.scrollY > lastScrollY) {
    if (
      div !== null &&
      div !== undefined &&
      div &&
      hamburger instanceof HTMLDivElement
    ) {
      div.style.display = "none";
      hamburger.style.display = "flex";
    }
  } else {
    if (
      div !== null &&
      div !== undefined &&
      div &&
      hamburger instanceof HTMLDivElement
    ) {
      div.style.display = "flex";
      hamburger.style.display = "none";
    }
  }
});

const hamburgerButton = document.querySelector(".hamburger-svc");
const hamburgerMenu = document.querySelector(".toogle-menu");

hamburgerButton?.addEventListener("click", () => {
  hamburgerMenu?.classList.toggle("active");
});
