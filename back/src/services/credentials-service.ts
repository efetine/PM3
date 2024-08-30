import { CreateCredentialDTO } from "../dto/create-credential-dto";
import { UserLoginDTO } from "../dto/user-login-dto";
import { ICredential } from "../interfaces/credential-interface";
import { CredentialsRepository } from "../repositories/credentials-repository";

export class CredentialsService {
  private repository: CredentialsRepository;
  constructor() {
    this.repository = new CredentialsRepository();
  }

  async create(credential: CreateCredentialDTO) {
    try {
      const newCredential = await this.repository.create(credential);

      return newCredential;
    } catch {
      throw Error("Cannot create credential on service");
    }
  }

  async getByUsernameAndPassword(
    loginDTO: UserLoginDTO
  ): Promise<ICredential | null> {
    try {
      const credential =
        await this.repository.getByUsernameAndPassword(loginDTO);

      return credential;
    } catch {
      throw Error("Cannot get credential on service");
    }
  }
}
