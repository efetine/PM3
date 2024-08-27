import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointment } from "./appointment-entity";
import { IUser } from "../interfaces/user-interface";
import { Credential } from "./credential-entity";

@Entity({
  name: "users",
})
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  birthdate: string;

  @Column()
  nDni: number;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToOne(() => Credential, {
    nullable: false,
  })
  @JoinColumn({
    name: "credential_id",
  })
  credential: Credential;
}
