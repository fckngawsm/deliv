import { UseCase } from "@api/contracts/UseCase";
import { User } from "@api/modules/users/domain/entities/User";
import { UserRepository } from "@api/modules/users/domain/repositories/UserRepository";
import { BlockUserDto } from "./BlockUserDto";

export class BlockUserUseCase implements UseCase<BlockUserDto, User> {
  constructor(private readonly usersRepo: UserRepository) {}
  execute(input: BlockUserDto) {}
}
