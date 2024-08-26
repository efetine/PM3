import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { CreateUserDTO } from "../dto/create-user-dto";
import { UserByIdDTO } from "../dto/user-by-id-dto";
import { User } from "../entities/user-entity";
import { IUser } from "../interfaces/user-interface";

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
    const user = await this.repository.findOneBy({
      id,
    });

    return user;
  }

  async create(user: CreateUserDTO): Promise<IUser | null> {
    try {
      const createdUser = this.repository.create({
        ...user,
        active: true,
      });
      const savedUser = await this.repository.save(createdUser);

      return savedUser;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async delete({ id }: UserByIdDTO): Promise<boolean> {
    const repository = AppDataSource.getRepository(User);

    const result = await repository.delete({
      id,
    });

    if (result.affected === 1) {
      return true;
    } else {
      return false;
    }
  }
}
