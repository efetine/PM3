import { IUser } from "./user-interface";

export interface IAppointment {
  id: number;
  date: Date;
  time: string;
  status: "active" | "cancelled";
  // user: IUser;
  // createdAt: Date;
  // updatedAt: Date;
}
