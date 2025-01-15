import { fetchUsers } from "./public/api/usersApi.ts";
import { User } from "./model.ts";

export const verifyUser = async (user: string, password: string) => {
  const users: User[] = await fetchUsers();
  const isValid = users.find(
    (u) => u.email === user && u.password === password
  );

  if (isValid) {
    console.log("Usuario correcto");
    window.location.href = `/public/userProfile/index.html?username=${isValid.username}`;
  } else {
    console.log("Usuario o contraseña incorrecta");
  }
};
