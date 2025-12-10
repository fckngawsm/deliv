import {
  toDb,
  toDomain,
} from "@api/modules/users/infrastructure/mappers/userMapper";
import { eq } from "drizzle-orm";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { usersTable } from "./schema";
import { DrizzleClient } from "./types";

export class UserRepositoryDrizzle implements UserRepository {
  constructor(private readonly db: DrizzleClient) {}

  async findById(id: number): Promise<User | null> {
    const rows = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));

    if (rows.length === 0) return null;

    return toDomain(rows[0]);
  }

  async findByEmail(email: string): Promise<User | null> {
    const rows = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (rows.length === 0) return null;

    return toDomain(rows[0]);
  }

  async register(user: User): Promise<void> {
    const data = toDb(user);

    const [existingUser] = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user.email));

    if (existingUser)
      throw new Error("Пользователь с таким email уже существует");

    await this.db.insert(usersTable).values(data).onConflictDoUpdate({
      target: usersTable.id,
      set: data,
    });
  }
}
