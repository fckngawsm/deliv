import { User } from "@api/modules/users/domain/entities/User";
import { usersTable } from "@api/modules/users/infrastructure/db/schema";

export const toDomain = (row: typeof usersTable.$inferSelect): User => {
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    roleId: row.role_id,
    createdAt: row.created_at,
  };
};

export const toDb = (data: User): typeof usersTable.$inferSelect => {
  return {
    created_at: data.createdAt,
    role_id: data.roleId,
    id: data.id,
    name: data.name,
    email: data.email,
  };
};
