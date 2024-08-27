import { ICredential } from "../interfaces/credential-interface";

export type CreateCredentialDTO = Pick<ICredential, "username" | "password">;
