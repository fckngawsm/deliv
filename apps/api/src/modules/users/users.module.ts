import { db } from "@api/infrastructure/db/db";
import { BlockUserUseCase } from "./application/use-cases/BlockUser/BlockUserUseCase";
import { GetUserByIdUseCase } from "./application/use-cases/GetUserById/GetUserByIdUseCase";
import { RegisterUserUseCase } from "./application/use-cases/RegisterUser/RegisterUserUseCase";
import { UnblockUserUseCase } from "./application/use-cases/UnblockUser/UnblockUserUseCase";
import { UserRepositoryDrizzle } from "./infrastructure/db/UserRepositoryDrizzle";

const userRepository = new UserRepositoryDrizzle(db);

const registerUserUseCase = new RegisterUserUseCase(userRepository);
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const blockUserUseCase = new BlockUserUseCase(userRepository);
const unblockUserUseCase = new UnblockUserUseCase(userRepository);

export const usersModuleDeps = {
  registerUserUseCase,
  blockUserUseCase,
  getUserByIdUseCase,
  unblockUserUseCase,
};
