import {
  displayUserName,
  displayUserPhotoProfile,
  displayUserNamePlants,
  displayPlantInformation,
  displayUserPlants,
} from "../../public/userProfile/ui";
import { fetchUsers } from "../api/usersApi";
import { fecthPlants } from "../api/plantsApi";

const getUserFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("username");
};

const loadUserData = async () => {
  const userName = getUserFromURL();
  if (userName) {
    try {
      const users = await fetchUsers();
      const plants = await fecthPlants();
      const user = users.find((u) => u.username === userName);
      if (user) {
        displayUserPhotoProfile(user);
        displayUserName(user);
        displayUserNamePlants(user.savedPlants);
        /* displayPlantInformation(plants); */
        displayUserPlants(plants, user.savedPlants);
      }
    } catch (e) {
      console.log(e);
    }
  }
};

document.addEventListener("DOMContentLoaded", loadUserData);
