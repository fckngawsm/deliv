import { router } from "@api/trpc/context";
import { createOrdersProcedures } from "./ordersProcedures";
import { OrdersProceduresDeps } from "./types";

export const createOrdersRouter = (deps: OrdersProceduresDeps) => {
  const procedures = createOrdersProcedures(deps);

  return router({
    getOrders: procedures.getOrders,
  });
};
