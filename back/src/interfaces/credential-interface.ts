import { IUser } from "./user-interface";

export interface ICredential {
  id: number;
  username: string;
  password: string;
  user: IUser;
  // createdAt: Date;
  // updatedAt: Date;
}
