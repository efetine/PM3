import { Request, Response } from "express";
import { UserByIdDTO } from "../dto/user-by-id-dto";
import { AppointmentService } from "../services/appointments-service";
import { CreateAppointmentDTO } from "../dto/create-appointment-dto";
import { IAppointment } from "../interfaces/appointment-interface";
import { AppointmentByIdDTO } from "../dto/appointment-by-id-dto";
import { GetAllAppointmentDTO } from "../dto/get-all-appointments-dto";
import { IUser } from "../interfaces/user-interface";

export class AppointmentsController {
  service: AppointmentService;
  constructor() {
    this.service = new AppointmentService();
  }
  //! Obtener todos los turnos
  // input: req: Request<{}, UserByIdDTO>, res: Response
  // output: Promise<Appointment[]>
  getAll = async (
    req: Request<{}, {}, {}, GetAllAppointmentDTO>,
    res: Response<
      | {
          user: IUser;
        }
      | { error: string }
    >
  ): Promise<void> => {
    const queryParams = req.query;

    try {
      const Appointments = await this.service.getAll(queryParams);
      res.status(201).json(Appointments);
    } catch {
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

      res.status(201).json(appointment);
    } catch {
      res.status(404).json({ error: "Not Found" });
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
    const appointment = req.params;
    try {
      const isCanceled = await this.service.cancel(appointment);

      if (isCanceled === false) {
        res.status(404).json({
          error: "NOT FOUND",
        });
        return;
      }

      res.status(200).json();
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  };
}
