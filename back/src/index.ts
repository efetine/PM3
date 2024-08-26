import "reflect-metadata";
import { server } from "./server";
// import express, { Express, Request, Response } from "express";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello from Express with TypeScript!");
// });

server.listen(PORT, async () => {
  await AppDataSource.initialize();

  console.log(`Server listening on port ${PORT}`);
});
