import { Request, Response } from "express";
import { UserByIdDTO } from "../dto/user-by-id-dto";
import { AppointmentService } from "../services/appointments-service";
import { CreateAppointmentDTO } from "../dto/create-appointment-dto";
import { IAppointment } from "../interfaces/appointment-interface";
import { AppointmentByIdDTO } from "../dto/appointment-by-id-dto";
import { Appointment } from "../entities/appointment-entity";

export class AppointmentsController {
  service: AppointmentService;
  constructor() {
    this.service = new AppointmentService();
  }
  //! Obtener todos los turnos
  // input: req: Request<{}, UserByIdDTO>, res: Response
  // output: Promise<Appointment[]>
  getAll = async (
    req: Request,
    res: Response<IAppointment[] | { error: string }>
  ): Promise<void> => {
    try {
      const Appointments = await this.service.getAll();
      res.status(201).json(Appointments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  //! traer 1 turno por id

  getById = async (
    req: Request<UserByIdDTO>,
    res: Response<IAppointment | { error: string }>
  ) => {
    try {
      const params = req.params;
      const appointment = await this.service.getById({
        id: params.id,
      });
      return appointment;
      res.status(201).json();
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Not Found" });
    }
  };

  //! crear un turno

  create = async (
    req: Request<{}, {}, CreateAppointmentDTO>,
    res: Response<IAppointment | { error: string }>
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

  cancel = async (
    req: Request<AppointmentByIdDTO>,
    res: Response<IAppointment | { error: string }>
  ) => {
    try {
      res.status(200).json();
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error,
      });
    }
  };
}
