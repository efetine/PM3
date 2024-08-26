import { IUser } from "../interfaces/user-interface";

// export interface GetUserDTO {
//   userId: string;
// }

export type UserByIdDTO = Pick<IUser, "id">;
