import { router } from "@api/trpc/context";
import { UsersProceduresDeps } from "./types";
import { createUsersProcedures } from "./usersProcedures";

export const createUsersRouter = (deps: UsersProceduresDeps) => {
  const procedures = createUsersProcedures(deps);

  return router({
    ...procedures,
  });
};
