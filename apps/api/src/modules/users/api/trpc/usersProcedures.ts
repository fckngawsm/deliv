import { publicProcedure } from "@api/trpc/context";
import z from "zod";
import { UsersProceduresDeps } from "./types";

export const createUsersProcedures = (deps: UsersProceduresDeps) => ({
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const user = await deps.registerUserUseCase.execute(input);
      return user;
    }),
});
