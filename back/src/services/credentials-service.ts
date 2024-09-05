import bcrypt from "bcrypt";

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
    const { username, password } = credential;

    const hashedPassword = await bcrypt.hash(password, 15);

    try {
      const newCredential = this.repository.create({
        username,
        password: hashedPassword,
      });

      return newCredential;
    } catch {
      throw Error("Cannot create credential on service");
    }
  }

  async getByUsernameAndPassword(
    loginDTO: UserLoginDTO
  ): Promise<ICredential | null> {
    const { username, password } = loginDTO;

    try {
      const credential = await this.repository.getByUsernameAndPassword({
        username,
      });

      if (credential !== null) {
        const isValid = await bcrypt.compare(password, credential.password);

        if (isValid === true) {
          return credential;
        } else {
          return null;
        }
      }

      return credential;
    } catch {
      throw Error("Cannot get credential on service");
    }
  }
}
