import { Request, Response, NextFunction } from "express";

export function validateCreateAppointment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const keys = {
    date: "",
    time: "",
    userId: "",
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
