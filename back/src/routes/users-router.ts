import { Router } from "express";

import { UsersController } from "../controllers/users-controller";
import { validateCreateUser } from "../middlewares/validate-user-create";
import { validateUserLogin } from "../middlewares/validate-user-login";

const usersRouter = Router();

const { getAll, getById, deleteById, login, register } = new UsersController();

usersRouter.get("/", getAll);

usersRouter.get("/:id", getById);

usersRouter.post("/register", validateCreateUser, register);

usersRouter.post("/login", validateUserLogin, login);

usersRouter.delete("/:id", deleteById);

export { usersRouter };
