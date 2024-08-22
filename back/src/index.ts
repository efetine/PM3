import { server } from "./server";
// import express, { Express, Request, Response } from "express";
import { PORT } from "./config/envs";

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello from Express with TypeScript!");
// });

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
