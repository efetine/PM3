import express from "express";
import morgan from "morgan";
import cors from "cors";
// import router from "./routes";
import { appointmentsRouter, usersRouter } from "./routes/index-router";

const server = express();

// Middlewares
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

// Routers
server.use("/appointments", appointmentsRouter);
server.use("/users", usersRouter);

export { server };
