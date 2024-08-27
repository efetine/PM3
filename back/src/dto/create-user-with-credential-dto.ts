import { CreateCredentialDTO } from "./create-credential-dto";
import { CreateUserDTO } from "./create-user-dto";

export type CreateUserWithCredentialDTO = CreateUserDTO & CreateCredentialDTO;
