import UserDto from "../dto/create-user-dto";
import { IUsers } from "../interfaces/users-interface";

const users: IUsers[] = [];

export const createUserService = async (userData: UserDto) => {
  const newUser: Iusers = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };
  users.push();
};
