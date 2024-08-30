import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user-entity";
import {
  AppointmentStatus,
  IAppointment,
} from "../interfaces/appointment-interface";

@Entity({
  name: "appointments",
})
export class Appointment implements IAppointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column({
    default: AppointmentStatus.ACTIVE,
  })
  status: AppointmentStatus;

  // @Column()
  // description: string;

  @ManyToOne(() => User, (user) => user.appointments, {
    nullable: false,
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
