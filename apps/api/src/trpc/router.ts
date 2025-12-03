import { createOrdersRouter } from "@api/modules/orders/api/trpc/ordersRouter";
import { ordersModuleDeps } from "@api/modules/orders/orders.module";
import { createUsersRouter } from "@api/modules/users/api/trpc/usersRouter";
import { usersModuleDeps } from "@api/modules/users/users.module";
import { router } from "./context";

const appRouter = router({
  users: createUsersRouter(usersModuleDeps),
  orders: createOrdersRouter(ordersModuleDeps),
});

export type AppRouter = typeof appRouter;
