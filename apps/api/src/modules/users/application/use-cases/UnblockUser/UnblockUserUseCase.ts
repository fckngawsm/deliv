import { UseCase } from "@api/contracts/UseCase";
import { User } from "@api/modules/users/domain/entities/User";
import { UserRepository } from "@api/modules/users/domain/repositories/UserRepository";
import { UnblockUserDto } from "./UnblockUserDto";

export class UnblockUserUseCase implements UseCase<UnblockUserDto, User> {
  constructor(private readonly usersRepo: UserRepository) {}
  execute(input: UnblockUserDto) {}
}
