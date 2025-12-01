import { createUsersRouter } from "@api/modules/users/api/trpc/usersRouter";
import { usersModuleDeps } from "@api/modules/users/users.module";
import { router } from "./context";

const appRouter = router({
  users: createUsersRouter(usersModuleDeps),
});

export type AppRouter = typeof appRouter;
