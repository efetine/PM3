import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/credential-entity";
import { CreateCredentialDTO } from "../dto/create-credential-dto";
import { ICredential } from "../interfaces/credential-interface";

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
}
