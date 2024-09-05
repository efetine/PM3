import { CreateCredentialDTO } from "../dto/create-credential-dto";
import { CreateUserDTO } from "../dto/create-user-dto";
import { UserByIdDTO } from "../dto/user-by-id-dto";
import { UserLoginDTO } from "../dto/user-login-dto";
import { IUser } from "../interfaces/user-interface";
import { UsersRepository } from "../repositories/users-repository";
import { CredentialsService } from "./credentials-service";

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
    const credentialsService = new CredentialsService();

    const createdCredential = await credentialsService.create(credential);

    const newUser = await this.usersRepository.create(user, createdCredential);

    return newUser;
  }

  async deleteById(userDTO: UserByIdDTO) {
    const user = await this.usersRepository.deleteById(userDTO);

    return user;
  }

  async login(
    loginDTO: UserLoginDTO
  ): Promise<{ login: true; user: IUser } | { login: false }> {
    try {
      const credentialsService = new CredentialsService();

      const credential =
        await credentialsService.getByUsernameAndPassword(loginDTO);

      if (credential === null) {
        return {
          login: false,
        };
      }

      const data = await this.usersRepository.login(credential);

      return data;
    } catch {
      throw Error("Cannot login user");
    }
  }
}
