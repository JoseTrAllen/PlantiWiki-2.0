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
