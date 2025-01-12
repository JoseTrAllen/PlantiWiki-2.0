import {
  displayUserName,
  displayUserPhotoProfile,
} from "../../src/userProfile/ui";
import { fetchUsers } from "../api/usersApi";

const getUserFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("username");
};

const loadUserData = async () => {
  const userName = getUserFromURL();
  if (userName) {
    try {
      const users = await fetchUsers();
      const user = users.find((u) => u.username === userName);
      if (user) {
        displayUserPhotoProfile(user);
        displayUserName(user);
        console.log(`El usuario ${userName} existe`);
      }
    } catch (e) {
      console.log(e);
    }
  }
};

document.addEventListener("DOMContentLoaded", loadUserData);
