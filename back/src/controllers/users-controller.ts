import { Request, Response } from "express";
import { IUsers } from "../interfaces/users-interface";

export const getUsersController = async (
  req: Request<{}, IUsers[]>,
  res: Response
) => {
  res.json();
};

export const createUserController = async (
  req: Request<{}, IUsers[]>,
  res: Response
) => {};

export const deletUserController = async (
  req: Request<{}, IUsers[]>,
  res: Response
) => {};
