export enum AppointmentStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}
export interface IAppointment {
  id: number;
  date: string;
  time: string;
  status: AppointmentStatus;
  // description: string;
  // status: "active" | "cancelled";
  // user: IUser;
  // createdAt: Date;
  // updatedAt: Date;
}
