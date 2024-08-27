import { Router } from "express";

import { AppointmentsController } from "../controllers/appointments-controller";
import { validateCreateAppointment } from "../middlewares/validate-appointment-create";

const { create, cancel, getById, getAll } = new AppointmentsController();

export const appointmentsRouter = Router();
// Named export

appointmentsRouter.get("/", getAll);

appointmentsRouter.get("/:id", getById);

appointmentsRouter.post("/schedule", validateCreateAppointment, create);

appointmentsRouter.post("/cancel", cancel);

// appointmentsRouter.put("/edit", editAppointment);

// Default export
// const appointmentsRouter = Router();

// export default appointmentsRouter;
