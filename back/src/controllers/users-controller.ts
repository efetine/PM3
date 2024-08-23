import { Request, Response } from "express";
import { IUsers } from "../interfaces/users-interface";

//! trae todos los usuarios

export const getAllUsers = async (
  req: Request<{}, IUsers[]>,
  res: Response
) => {
  res.json();
};

//! trae 1 usuario por id
export const getUserById = async (req: Request, res: Response) => {
  rest.status(200).json();
};

//! agrega un usuario
export const userRegister = async (req: Request, res: Response) => {
  res.json();
};

//! logear 1 usuario
export const userLogin = async (req: Request, res: Response) => {
  res.json();
};

//! Deletear 1 usuario
export const userDelete = async (
  req: Request<{}, IUsers[]>,
  res: Response
) => {};
