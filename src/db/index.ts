// LOCAL

// import { drizzle } from "drizzle-orm/mysql2";
// import mysql from "mysql2/promise";

// const poolConnection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: "temp_next_crud",
// });

// export const db = drizzle(poolConnection);



// FOR SERVERLESS
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";
import { env } from "../../env";


const globalPool: mysql.Pool | undefined = undefined;

function connect() {
  if (typeof globalPool !== "undefined") {
    return globalPool;
  }
  return mysql.createPool({
    uri: env.DB_URL,
  });
}

export const db = drizzle(connect(), {
  schema,
  mode: "default",
  // logger: process.env.NODE_ENV === "development",
});