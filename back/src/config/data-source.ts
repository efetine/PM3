import { DataSource } from "typeorm";
import { User } from "../entities/user-entity";
import { Appointment } from "../entities/appointment-entity";
import { Credential } from "../entities/credential-entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "pm3",
  synchronize: true,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
});
