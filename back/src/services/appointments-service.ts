import { IAppointment } from "../interfaces/appointment-interface";
import { AppointmentsRepository } from "../repositories/appointments-repository";

export class AppointmentService {
  appointmentRepository: AppointmentsRepository;
  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  //! Obtener todos los turnos

  async getAll(): Promise<IAppointment> {}

  //! traer 1 turno por id

  //! crear un turno

  //! cancelar un turno
}
