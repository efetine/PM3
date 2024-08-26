import { Repository } from "typeorm";
import { Appointment } from "../entities/appointment-entity";
import { AppDataSource } from "../config/data-source";
import { IAppointment } from "../interfaces/appointment-interface";
import { AppointmentByIdDTO } from "../dto/appointment-by-id-dto";
import { CreateAppointmentDTO } from "../dto/create-appointment-dto";

export class AppointmentsRepository {
  repository: Repository<Appointment>;
  constructor() {
    this.repository = AppDataSource.getRepository(Appointment);
  }
  //! Obtener todos los turnos
  async getAll(): Promise<IAppointment[]> {
    const appointments = await this.repository.find();

    return appointments;
  }

  //! traer 1 turno por id
  async getById({ id }: AppointmentByIdDTO): Promise<Appointment | null> {
    const appointment = await this.repository.findOneBy({
      id,
    });

    return appointment;
  }

  //! crear un turno

  async create(appointment: CreateAppointmentDTO): Promise<Appointment> {
    const newAppointment = this.repository.create(appointment);
    const savedAppointment = await this.repository.save(newAppointment);

    return savedAppointment;
  }

  //! cancelar un turno
  async cancel() {}

  //! editar un turno
  async edit() {}
}
