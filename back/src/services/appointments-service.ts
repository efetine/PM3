import { AppointmentByIdDTO } from "../dto/appointment-by-id-dto";
import { CreateAppointmentDTO } from "../dto/create-appointment-dto";
import { AppointmentsRepository } from "../repositories/appointments-repository";

export class AppointmentService {
  repository: AppointmentsRepository;
  constructor() {
    this.repository = new AppointmentsRepository();
  }

  //! Obtener todos los turnos
  async getAll() {
    try {
      const appointments = await this.repository.getAll();
      return appointments;
    } catch {
      throw Error("Cannot appointment on service");
    }
  }
  //! traer 1 turno por id
  async getById(appointmentDTO: AppointmentByIdDTO) {
    try {
      const appointment = await this.repository.getById(appointmentDTO);
      return appointment;
    } catch {
      throw Error("Cannot appointment on service");
    }
  }

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
