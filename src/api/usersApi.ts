import { User } from "../../model";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("http://localhost:3000/users");
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    throw new Error("Algo ha salido mal");
  }
};
