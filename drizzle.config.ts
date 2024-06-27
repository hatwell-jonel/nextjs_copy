import { defineConfig  } from "drizzle-kit";
import { env } from "./env";


export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema/index.ts",
  out: "./migrations",
  dbCredentials: {
    url: env.DB_URL,
  },
  tablesFilter: ["temp_*"],
  verbose: true,
  strict: true,
});  