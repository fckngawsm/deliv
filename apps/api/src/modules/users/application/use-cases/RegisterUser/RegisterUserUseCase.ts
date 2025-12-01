import { UserRepository } from "@api/modules/users/domain/repositories/UserRepository";
import { RegisterUserDto } from "./RegisterUserDto";

export class RegisterUserUseCase {
  constructor(private readonly usersRepo: UserRepository) {}
  execute(input: RegisterUserDto) {}
}
