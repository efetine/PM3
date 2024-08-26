import { Router } from "express";

import {
  createAppointment,
  editAppointment,
  deleteAppointment,
  getAppointmentById,
  getAllAppointments,
} from "../controllers/appointments-controller";

export const appointmentsRouter = Router();
// Named export

appointmentsRouter.get("/", getAllAppointments);

appointmentsRouter.get("/:id", getAppointmentById);

appointmentsRouter.post("/schedule", createAppointment);

appointmentsRouter.post("/cancel", deleteAppointment);

appointmentsRouter.put("/edit", editAppointment);

// Default export
// const appointmentsRouter = Router();

// export default appointmentsRouter;
