import { Request, Response } from "express";
import { UserByIdDTO } from "../dto/user-by-id-dto";
import { AppointmentService } from "../services/appointments-service";
import { CreateAppointmentDTO } from "../dto/create-appointment-dto";

export class AppointmentsController {
  service: AppointmentService;
  constructor() {
    this.service = new AppointmentService();
  }
  //! Obtener todos los turnos
  getAll = async (req: Request<{}, UserByIdDTO>, res: Response) => {
    res.json();
  };

  //! traer 1 turno por id

  getById = async (req: Request<UserByIdDTO>, res: Response) => {
    res.json();
  };

  //! crear un turno

  create = async (
    req: Request<{}, {}, CreateAppointmentDTO>,
    res: Response
  ) => {
    const appointment = req.body;

    try {
      const createdAppointment = await this.service.create(appointment);

      res.status(201).json(createdAppointment);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error,
      });
    }
  };

  //! cancelar un turno

  cancel = async (req: Request, res: Response) => {
    res.status(200).json();
  };
}
