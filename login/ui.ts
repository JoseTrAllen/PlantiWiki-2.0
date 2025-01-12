import { verifyUser } from "./verifyUser";

const userInputValue = () => {
  const userInput = document.getElementById("user-input");

  if (!userInputValue) {
    throw new Error("Usuario vacío");
  }

  if (
    userInput !== null &&
    userInput !== undefined &&
    userInput instanceof HTMLInputElement
  ) {
    const userName = userInput.value;
    return userName;
  }
};

const passwordInputValue = () => {
  const passwordInput = document.getElementById("password-input");

  if (
    passwordInput !== null &&
    passwordInput !== undefined &&
    passwordInput instanceof HTMLInputElement
  ) {
    const password = passwordInput.value;
    return password;
  }
};

const button = document.getElementById("login-button");
if (
  button !== undefined &&
  button !== null &&
  button instanceof HTMLButtonElement
) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
    const user = userInputValue();
    const password = passwordInputValue();

    if (user && password) {
      verifyUser(user, password);
    } else {
      throw new Error("El usuario o la contraseña están vacíos");
    }
    if (form) {
      form.reset();
    }
  });
}

console.log("Funciono");
