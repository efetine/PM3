import { DataSource } from "typeorm";

import { User } from "../entities/user-entity";
import { Appointment } from "../entities/appointment-entity";
import { Credential } from "../entities/credential-entity";
import {
  DB_HOSTNAME,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOSTNAME,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
});
