import { IAppointment } from "../interfaces/appointment-interface";

export type CreateAppointmentDTO = Pick<IAppointment, "date" | "time">;
