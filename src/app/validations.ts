import { users } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import type { z } from "zod";

export const createSchema = createInsertSchema(users, {
  name: (schema) => schema.name.min(1,  {
    message: "Name must be at least 1 character.",
  }),
});

export type New = z.output<typeof createSchema>;