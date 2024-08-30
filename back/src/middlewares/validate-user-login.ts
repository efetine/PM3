import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const userLoginSchema = z.object({
  username: z.string().min(3).max(12),
  password: z.string().min(6),
});

export function validateUserLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // safeparse es el metodo que valida el body contra tu schema
  const result = userLoginSchema.safeParse(req.body);

  if (result.success === false) {
    res.status(400).send({ error: result.error });
  } else {
    next();
  }
}
