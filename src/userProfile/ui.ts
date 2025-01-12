import { User } from "../../model";

export const displayUserPhotoProfile = (user: User) => {
  const newImg = document.createElement("img");
  const div = document.getElementById("user-container");
  if (div && div instanceof HTMLDivElement) {
    newImg.src = user.photo;
    div.appendChild(newImg);
  }
};

export const displayUserName = (user: User) => {
  const newParagraph = document.createElement("h2");
  const div = document.getElementById("user-container");
  if (div && div instanceof HTMLDivElement) {
    newParagraph.innerText = user.username;
    div.appendChild(newParagraph);
  }
};
