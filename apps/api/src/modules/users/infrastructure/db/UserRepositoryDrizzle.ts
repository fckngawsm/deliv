import { toDb, toDomain } from "@api/infrastructure/mappers/userMapper";
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

  async save(user: User): Promise<void> {
    const data = toDb(user);

    await this.db.insert(usersTable).values(data).onConflictDoUpdate({
      target: usersTable.id,
      set: data,
    });
  }
}
