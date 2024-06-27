import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema/index.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DB_URL,
  },
  tablesFilter: ["temp_*"],
  verbose: true,
  strict: true,
});  