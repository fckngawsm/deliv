import { db } from "@api/infrastructure/db/db";
import { GetOrdersUseCase } from "./application/use-cases/GetOrdersUseCase";
import { OrderRepositoryDrizzle } from "./infrastructure/db/OrderRepositoryDrizzle";

const orderRepository = new OrderRepositoryDrizzle(db);

const getOrders = new GetOrdersUseCase(orderRepository);

export const ordersModuleDeps = {
  getOrders,
};
