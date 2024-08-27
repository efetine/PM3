import { CreateCredentialDTO } from "../dto/create-credential-dto";
import { CreateUserDTO } from "../dto/create-user-dto";
import { UserByIdDTO } from "../dto/user-by-id-dto";
import { IUser } from "../interfaces/user-interface";
import { CredentialsRepository } from "../repositories/credentials-repository";
import { UsersRepository } from "../repositories/users-repository";

export class UsersService {
  usersRepository: UsersRepository;
  constructor() {
    this.usersRepository = new UsersRepository();
  }
  async getAll(): Promise<IUser[]> {
    const users = await this.usersRepository.getAll();

    return users;
  }

  async getById(userDTO: UserByIdDTO) {
    const user = await this.usersRepository.getById(userDTO);

    return user;
  }

  async create(user: CreateUserDTO, credential: CreateCredentialDTO) {
    const credentialsService = new CredentialsRepository();

    const createdCredential = await credentialsService.create(credential);

    const newUser = await this.usersRepository.create(user, createdCredential);

    return newUser;
  }

  async delete(userDTO: UserByIdDTO) {
    const user = await this.usersRepository.delete(userDTO);

    return user;
  }
}
