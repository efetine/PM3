import { Router } from "express";

import {
  getAllUsers,
  getUserById,
  userRegister,
  userLogin,
  userDelete,
} from "../controllers/users-controller";

export const usersRouter = Router();

usersRouter.get("/", getAllUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post("/register", userRegister);

usersRouter.post("/login", userLogin);

usersRouter.delete("/delete", userDelete);
