import { IAppointment } from "../interfaces/appointment-interface";
import { UserByIdDTO } from "./user-by-id-dto";

export type CreateAppointmentDTO = Pick<IAppointment, "date" | "time"> & {
  userId: UserByIdDTO["id"];
};
