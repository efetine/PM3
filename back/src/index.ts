import "reflect-metadata";
import { server } from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then(() => {
    server.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Cannot connect to database", error));
