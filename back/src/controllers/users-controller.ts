import { Request, Response } from "express";
import { IUser } from "../interfaces/user-interface";
import { UsersService } from "../services/users-service";
// import type { CreateUserDTO } from "../dto/create-user-dto";
import type { UserByIdDTO } from "../dto/user-by-id-dto";
import { CreateUserWithCredentialDTO } from "../dto/create-user-with-credential-dto";

//! trae todos los usuarios
export class UsersController {
  usersService: UsersService;
  constructor() {
    this.usersService = new UsersService();
  }

  getAllUsers = async (
    req: Request,
    res: Response<IUser[] | { error: string }>
  ) => {
    try {
      const users = await this.usersService.getAll();

      res.status(200).json(users);
    } catch {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  };

  //! trae 1 usuario por id
  getUserById = async (
    req: Request<UserByIdDTO>,
    res: Response<IUser | { error: string }>
  ) => {
    const params = req.params;

    try {
      const user = await this.usersService.getById({
        id: params.id,
      });

      if (user === null) {
        res.status(404).json({
          error: "Not Found",
        });
        return;
      }

      res.status(200).json(user);
    } catch {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  };

  userRegister = async (
    req: Request<{}, {}, CreateUserWithCredentialDTO>,
    res: Response<IUser | { error: string }>
  ) => {
    const { name, email, birthdate, nDni, username, password } = req.body;

    const user = {
      name,
      email,
      birthdate,
      nDni,
    };

    const credential = {
      username,
      password,
    };

    try {
      const newUser = await this.usersService.create(user, credential);

      res.status(201).json(newUser);
    } catch {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  };

  //! logear 1 usuario
  userLogin = async (req: Request, res: Response) => {
    res.json();
  };

  //! Deletear 1 usuario
  userDelete = async (
    req: Request<UserByIdDTO>,
    res: Response<void | { error: string }>
  ) => {
    const params = req.params;

    try {
      await this.usersService.delete({
        id: params.id,
      });
      res.status(200).json();
    } catch {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  };
}
