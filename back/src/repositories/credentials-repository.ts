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

  create(credential: CreateCredentialDTO): ICredential {
    try {
      const createdCredential = this.repository.create(credential);

      return createdCredential;
    } catch (error) {
      throw Error(error);
    }
  }

  async getByUsernameAndPassword({
    username,
  }: Pick<UserLoginDTO, "username">): Promise<ICredential | null> {
    try {
      const credential = await this.repository.findOne({
        where: {
          username,
        },
      });

      return credential;
    } catch {
      throw Error("Cannot get credential");
    }
  }
}
