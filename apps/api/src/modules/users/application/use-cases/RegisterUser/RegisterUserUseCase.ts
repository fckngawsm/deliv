import { UseCase } from "@api/contracts/UseCase";
import { User } from "@api/modules/users/domain/entities/User";
import { UserRepository } from "@api/modules/users/domain/repositories/UserRepository";
import { RegisterUserDto } from "./RegisterUserDto";

export class RegisterUserUseCase implements UseCase<RegisterUserDto, User> {
  constructor(private readonly usersRepo: UserRepository) {}
  async execute(input: RegisterUserDto) {
    const existingUser = await this.usersRepo.findByEmail(input.email);

    if (existingUser)
      throw new Error("Пользователь с таким email уже существует");
  }
}
