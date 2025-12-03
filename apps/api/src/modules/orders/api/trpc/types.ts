import { GetOrdersUseCase } from "../../application/use-cases/GetOrdersUseCase";

export type OrdersProceduresDeps = {
  getOrders: GetOrdersUseCase;
};
