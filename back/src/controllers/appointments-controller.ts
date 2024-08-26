import { Request, Response } from "express";
import { IAppointment } from "../interfaces/appointment-interface";

export class AppointmentsController {
  appointmentService: appointmentService;
  constructor() {
    this.appointmentServiceService = new appointmentServiceService();
  }
  //! Obtener todos los turnos
  async getAllAppointments(req: Request<{}, IAppointment[]>, res: Response) {
    res.json();
  }

  //! traer 1 turno por id

  async getById(req: Request<AppointmentByIdDTO>, res: Response) {}
}

//! crear un turno

export const createAppointment = async (req: Request, res: Response) => {
  res.status(200).json();
};

//! cancelar un turno

export const deleteAppointment = async (req: Request, res: Response) => {
  res.status(200).json();
};

//! editar un turno

export const editAppointment = async (req: Request, res: Response) => {
  res.status(200).json();
};
