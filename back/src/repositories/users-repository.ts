import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { CreateUserDTO } from "../dto/create-user-dto";
import { UserByIdDTO } from "../dto/user-by-id-dto";
import { User } from "../entities/user-entity";
import { IUser } from "../interfaces/user-interface";
import { ICredential } from "../interfaces/credential-interface";

export class UsersRepository {
  repository: Repository<User>;
  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  async getAll(): Promise<IUser[]> {
    const users = await this.repository.find();

    return users;
  }

  async getById({ id }: UserByIdDTO): Promise<IUser | null> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
      relations: ["appointments"],
    });

    return user;
  }

  async create(user: CreateUserDTO, credential: ICredential): Promise<IUser> {
    try {
      const createdUser = this.repository.create({
        ...user,
        credential,
      });
      const savedUser = await this.repository.save(createdUser);

      const { credential: newCredential, ...rest } = savedUser;
      // El { credential: newCredential } esta renombrando el atributo credential a newCredential.
      // Para evitar que choque con el parametro de la funcion que se llama igual.

      return rest;
    } catch {
      throw Error("Cannot create user");
    }
  }

  async deleteById({ id }: UserByIdDTO): Promise<void> {
    const repository = AppDataSource.getRepository(User);

    const result = await repository.delete({
      id,
    });

    if (result.affected === 1) {
      return;
    } else {
      throw Error("Cannot delete user");
    }
  }

  async login(
    credential: ICredential
  ): Promise<{ login: true; user: IUser } | { login: false }> {
    try {
      const user = await this.repository.findOne({
        where: {
          credential,
        },
      });

      if (user === null) {
        return {
          login: false,
        };
      }

      return {
        login: true,
        user,
      };
    } catch {
      throw Error("Error on database");
    }
  }
}

// Otra forma de hacer el repositorio
// export default AppDataSource.getRepository(User).extend({
//   "getAll": async () => {
//     const users = await this.find();

//     return users;
//   }
// });
