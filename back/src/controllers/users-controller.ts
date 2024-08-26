import { Request, Response } from "express";
import { IUser } from "../interfaces/user-interface";
import { UsersService } from "../services/users-service";
import { CreateUserDTO } from "../dto/create-user-dto";
import { UserByIdDTO } from "../dto/user-by-id-dto";

//! trae todos los usuarios
export class UsersController {
  usersService: UsersService;
  constructor() {
    this.usersService = new UsersService();
  }

  async getAllUsers(req: Request<{}, IUser[]>, res: Response) {
    const users = await this.usersService.getAll();

    res.json({
      users,
    });
  }

  //! trae 1 usuario por id
  async getUserById(req: Request<UserByIdDTO>, res: Response) {
    const params = req.params;

    const user = await this.usersService.getById({
      id: params.id,
    });

    res.status(200).json({
      user,
    });
  }

  async userRegister(req: Request<{}, {}, CreateUserDTO>, res: Response) {
    const body = req.body;

    const newUser = await this.usersService.create(body);

    if (newUser === null) {
      res.status(400).json({
        error: "Cannot create the user",
      });
      return;
    }

    res.status(201).json({
      user: newUser,
    });
  }

  //! logear 1 usuario
  async userLogin(req: Request, res: Response) {
    res.json();
  }

  //! Deletear 1 usuario
  async userDelete(req: Request<UserByIdDTO>, res: Response) {
    const params = req.params;

    const isDeleted = await this.usersService.delete({
      id: params.id,
    });

    if (isDeleted === true) {
      res.status(200).json({
        isDeleted,
      });
      return;
    }

    res.status(404).json({
      isDeleted,
    });
  }
}
