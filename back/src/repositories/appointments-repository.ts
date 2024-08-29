import { Repository } from "typeorm";
import { Appointment } from "../entities/appointment-entity";
import { AppDataSource } from "../config/data-source";
import {
  AppointmentStatus,
  IAppointment,
} from "../interfaces/appointment-interface";
import { AppointmentByIdDTO } from "../dto/appointment-by-id-dto";
import { CreateAppointmentDTO } from "../dto/create-appointment-dto";
import { GetAllAppointmentDTO } from "../dto/get-all-appointments-dto";
import { IUser } from "../interfaces/user-interface";
import { User } from "../entities/user-entity";

export class AppointmentsRepository {
  repository: Repository<Appointment>;
  constructor() {
    this.repository = AppDataSource.getRepository(Appointment);
  }
  //! Obtener todos los turnos
  async getAll({ userId }: GetAllAppointmentDTO): Promise<{
    user: IUser;
    appointments: IAppointment[];
  }> {
    try {
      const UserModel = AppDataSource.getRepository(User);
      const user = UserModel.create({
        id: Number(userId),
      });

      const appointments = await this.repository.find({
        where: {
          user,
        },
      });

      return {
        user,
        appointments,
      };
    } catch {
      throw Error("Cannot get appointments on database");
    }
  }

  //! traer 1 turno por id
  async getById({ id }: AppointmentByIdDTO): Promise<Appointment> {
    try {
      const appointment = await this.repository.findOneBy({
        id,
      });

      if (appointment === null) {
        throw Error("Cannot get an appointment on database");
      }

      return appointment;
    } catch {
      throw Error("Cannot get an appointment on database");
    }
  }

  //! crear un turno

  async create(appointment: CreateAppointmentDTO): Promise<Appointment> {
    const { userId, ...rest } = appointment;
    const newAppointment = this.repository.create({
      ...rest,
      user: {
        id: userId,
      },
    });
    try {
      const savedAppointment = await this.repository.save(newAppointment);
      return savedAppointment;
    } catch (error) {
      console.log(error);
      throw Error("Cannot create appointment on database");
    }
  }

  //! cancelar un turno
  async cancel({ id }: AppointmentByIdDTO): Promise<boolean> {
    try {
      const result = await this.repository.update(
        {
          id,
        },
        {
          status: AppointmentStatus.CANCELLED,
        }
      );

      if (result.affected === 0) {
        return false;
      }

      return true;
    } catch (error) {
      console.log(error);
      throw Error("Cannot cancel the appointment on database");
    }
  }
}
