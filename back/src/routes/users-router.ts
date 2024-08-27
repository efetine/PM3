import { Router } from "express";

import { UsersController } from "../controllers/users-controller";
import { validateCreateUser } from "../middlewares/validate-user-create";

const usersRouter = Router();

const { getAllUsers, getUserById, userDelete, userLogin, userRegister } =
  new UsersController();

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post("/register", validateCreateUser, userRegister);

usersRouter.post("/login", userLogin);

usersRouter.delete("/:id", userDelete);

export { usersRouter };
