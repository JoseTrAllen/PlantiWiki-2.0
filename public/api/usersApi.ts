import { User } from "../../model";

const usersApi = "https://67895c042c874e66b7d88056.mockapi.io/api/v1/users";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(usersApi);
    const data = await response.json();
    const users: User[] = data[0].users;
    return users;
  } catch (error) {
    throw new Error("Algo ha salido mal");
  }
};
