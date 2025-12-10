import { User } from "../entities/User";

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  register(user: User): Promise<void>;
}
