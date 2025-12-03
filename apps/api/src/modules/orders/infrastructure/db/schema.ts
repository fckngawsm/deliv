import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const orderTable = pgTable("orders", {
  id: serial().primaryKey(),
  creator_id: integer().notNull(),
  courier_id: integer().notNull(),
  created_id: timestamp().notNull().defaultNow(),
});
