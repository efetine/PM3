import { ICredential } from "../interfaces/credential-interface";

export type UserLoginDTO = Pick<ICredential, "username" | "password">;
