import { int, text, mysqlSchema, mysqlTableCreator } from "drizzle-orm/mysql-core";

const table = mysqlTableCreator((name) => `temp_${name}`);

export const users = table("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
});
