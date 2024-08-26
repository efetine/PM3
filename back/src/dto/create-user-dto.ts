import { IUser } from "../interfaces/user-interface";

// export interface CreateUserDTO {
//   name: IUser["name"];
//   email: IUser["email"];
//   age: IUser["age"];
// }

// Esto es similar a lo de arriba.
// Type es similar a una interface en TypeScript.
export type CreateUserDTO = Pick<IUser, "name" | "email" | "age">;
