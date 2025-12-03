import { Order } from "../../domain/entities/Order";
import { orderTable } from "../db/schema";

export const toDomain = (row: typeof orderTable.$inferSelect): Order => {
  return {
    id: row.id,
    courierId: row.courier_id,
    createdAt: row.created_id,
    creatorId: row.creator_id,
  };
};

export const toDb = (data: Order): typeof orderTable.$inferSelect => {
  return {
    id: data.id,
    courier_id: data.courierId,
    created_id: data.createdAt,
    creator_id: data.creatorId,
  };
};
