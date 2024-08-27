import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ICredential } from "../interfaces/credential-interface";
import { User } from "./user-entity";

@Entity({
  name: "credentials",
})
export class Credential implements ICredential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
    unique: true,
  })
  username: string;

  @Column()
  password: string;
}
