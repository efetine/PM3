import { Router } from "express";

import {
  createAppointmet,
  editAppointmet,
  DeletAppointmet,
  getAppointmentById,
  getAllAppointments,
} from "../controllers/appointments-controller";

export const appointmentsRouter = Router();
// Named export

appointmentsRouter.get("/", getAllAppointments);

appointmentsRouter.get("/:id", getAppointmentById);

appointmentsRouter.post("/schedule", createAppointmet);

appointmentsRouter.post("/cancel", DeletAppointmet);

appointmentsRouter.put("/edit", editAppointmet);

// Default export
// const appointmentsRouter = Router();

// export default appointmentsRouter;
