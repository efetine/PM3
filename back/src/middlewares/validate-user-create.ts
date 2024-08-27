import { Request, Response, NextFunction } from "express";

export function validateCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const keys = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  };
  const missingsInputs: string[] = [];

  for (const key in keys) {
    if (!req.body[key]) missingsInputs.push(key);
  }

  if (missingsInputs.length > 0) {
    res.status(400).send({ message: "Faltan datos", missingsInputs });
  } else {
    next();
  }
}
