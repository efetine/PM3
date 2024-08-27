import { CreateCredentialDTO } from "../dto/create-credential-dto";
import { CredentialsRepository } from "../repositories/credentials-repository";

export class CredentialsService {
  repository: CredentialsRepository;
  constructor() {
    this.repository = new CredentialsRepository();
  }

  async create(credential: CreateCredentialDTO) {
    const newCredential = await this.repository.create(credential);

    return newCredential;
  }
}
