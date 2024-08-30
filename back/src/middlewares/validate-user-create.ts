import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { userLoginSchema } from "./validate-user-login";

const createUserSchema = z
  .object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    birthdate: z.string().date(),
    nDni: z.number().min(7).max(8),
  })
  .extend(userLoginSchema.shape);
export function validateCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = createUserSchema.safeParse(req.body);

  if (result.success === false) {
    res.status(400).send({ error: result.error });
  } else {
    next();
  }
}
