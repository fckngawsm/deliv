import { db } from "@api/infrastructure/db/db";
import { RegisterUserUseCase } from "./application/use-cases/RegisterUser/RegisterUserUseCase";
import { UserRepositoryDrizzle } from "./infrastructure/db/UserRepositoryDrizzle";

const userRepository = new UserRepositoryDrizzle(db);

const registerUserUseCase = new RegisterUserUseCase(userRepository);

export const usersModuleDeps = {
  registerUserUseCase,
};
