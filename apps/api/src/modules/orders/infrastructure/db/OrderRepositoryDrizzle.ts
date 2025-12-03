import { DrizzleClient } from "@api/modules/users/infrastructure/db/types";
import { OrderRepository } from "../../domain/repository/OrderRepository";
import { toDomain } from "../mappers/orderMapper";
import { orderTable } from "./schema";

export class OrderRepositoryDrizzle implements OrderRepository {
  constructor(private readonly db: DrizzleClient) {}
  async getOrders() {
    const rows = await this.db.select().from(orderTable);

    if (rows.length === 0) return null;

    return rows.map(toDomain);
  }
}
