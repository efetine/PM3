export interface IAppointments {
  id?: number;
  date: Date;
  time: string;
  userld: number;
  status: "active" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}
