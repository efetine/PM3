import express from "express";
import morgan from "morgan";
// import router from "./routes";
import { appointmentsRouter, usersRouter } from "./routes/index-router";

const server = express();

// Middlewares
server.use(express.json());
server.use(morgan("dev"));

// Routers
server.use(appointmentsRouter);
server.use(usersRouter);

export { server };
