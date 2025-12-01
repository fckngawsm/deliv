import { User } from "../entities/User";

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
