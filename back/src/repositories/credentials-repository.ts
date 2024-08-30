import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/credential-entity";
import { CreateCredentialDTO } from "../dto/create-credential-dto";
import { ICredential } from "../interfaces/credential-interface";
import { UserLoginDTO } from "../dto/user-login-dto";

export class CredentialsRepository {
  repository: Repository<Credential>;
  constructor() {
    this.repository = AppDataSource.getRepository(Credential);
  }

  async create(credential: CreateCredentialDTO): Promise<ICredential> {
    try {
      const createdCredential = this.repository.create(credential);
      const savedCredential = await this.repository.save(createdCredential);

      return savedCredential;
    } catch {
      throw Error("Cannot create credential");
    }
  }

  async getByUsernameAndPassword({
    username,
    password,
  }: UserLoginDTO): Promise<ICredential | null> {
    try {
      const credential = await this.repository.findOne({
        where: {
          username,
          password,
        },
      });

      return credential;
    } catch {
      throw Error("Cannot get credential");
    }
  }
}
