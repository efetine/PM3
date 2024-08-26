import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user-entity";
import { IAppointment } from "../interfaces/appointment-interface";

@Entity({
  name: "appointments",
})
export class Appointment implements IAppointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  status: "active" | "cancelled";

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "user_id" })
  user: User;
}
