import { BlockUserUseCase } from "../../application/use-cases/BlockUser/BlockUserUseCase";
import { GetUserByIdUseCase } from "../../application/use-cases/GetUserById/GetUserByIdUseCase";
import { RegisterUserUseCase } from "../../application/use-cases/RegisterUser/RegisterUserUseCase";
import { UnblockUserUseCase } from "../../application/use-cases/UnblockUser/UnblockUserUseCase";

export type UsersProceduresDeps = {
  registerUserUseCase: RegisterUserUseCase;
  blockUserUseCase: BlockUserUseCase;
  getUserByIdUseCase: GetUserByIdUseCase;
  unblockUserUseCase: UnblockUserUseCase;
};
