import { CreateAppointmentDTO } from "../dto/create-appointment-dto";
import { AppointmentsRepository } from "../repositories/appointments-repository";

export class AppointmentService {
  repository: AppointmentsRepository;
  constructor() {
    this.repository = new AppointmentsRepository();
  }

  //! Obtener todos los turnos

  //! traer 1 turno por id

  //! crear un turno
  async create(appointment: CreateAppointmentDTO) {
    try {
      const newAppointment = this.repository.create(appointment);

      return newAppointment;
    } catch {
      throw Error("Cannot create appointment on service");
    }
  }

  //! cancelar un turno
}
