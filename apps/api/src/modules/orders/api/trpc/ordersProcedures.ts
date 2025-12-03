import { publicProcedure } from "@api/trpc/context";
import { GetOrdersUseCase } from "../../application/use-cases/GetOrdersUseCase";
import { OrdersProceduresDeps } from "./types";

export const createOrdersProcedures = (deps: OrdersProceduresDeps) => ({
  getOrders: publicProcedure.query(() => GetOrdersUseCase.execute()),
});
