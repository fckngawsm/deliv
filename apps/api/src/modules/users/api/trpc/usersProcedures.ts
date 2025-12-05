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
  block: publicProcedure
    .input(
      z.object({
        id: z.number().positive(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await deps.blockUserUseCase.execute(input);
      return user;
    }),
  unblock: publicProcedure
    .input(
      z.object({
        id: z.number().positive(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await deps.unblockUserUseCase.execute(input);
      return user;
    }),
  getUserById: publicProcedure
    .input(
      z.object({
        id: z.number().positive(),
      })
    )
    .query(async ({ input }) => {
      const user = await deps.getUserByIdUseCase.execute(input);
      return user;
    }),
});
