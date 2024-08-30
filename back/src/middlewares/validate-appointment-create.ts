import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const createAppointmentSchema = z.object({
  date: z.string().date(),
  time: z.string().time(),
});

// export type CreateAppointmentDTO = z.infer<typeof createAppointmentSchema>;

export function validateCreateAppointment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = createAppointmentSchema.safeParse(req.body);

  if (result.success === false) {
    res.status(400).send({ error: result.error });
  } else {
    next();
  }
}
