import { UseCase } from "@api/contracts/UseCase";
import { User } from "@api/modules/users/domain/entities/User";
import { UserRepository } from "@api/modules/users/domain/repositories/UserRepository";
import { GetUserByIdDto } from "./GetUserByIdDto";

export class GetUserByIdUseCase
  implements UseCase<GetUserByIdDto, User | null>
{
  constructor(private readonly usersRepo: UserRepository) {}
  execute(input: GetUserByIdDto) {}
}
