import { fetchUsers } from "../api/usersApi.ts";
import { User } from "../../model.ts";

export const verifyUser = async (user: string, password: string) => {
  const users: User[] = await fetchUsers();
  const isValid = users.find(
    (u) => u.username === user && u.password === password
  );

  if (isValid) {
    console.log("Usuario correcto");
    window.location.href = "/src/userProfile/userProfile.html";
  } else {
    console.log("Usuario o contraseña incorrecta");
  }
};
