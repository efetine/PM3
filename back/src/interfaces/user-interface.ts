import { IAppointment } from "./appointment-interface";
import { ICredential } from "./credential-interface";

export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  active: boolean;
  // appointments: IAppointment[];
  // credential: ICredential;
  // nDni: number;
  // credentials: string;
  // createdAt: Date;
  // updatedAt: Date;
}
