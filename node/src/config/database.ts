import mysql from "mysql2/promise";
import { database, host, password, user } from "../constants";

export const pool = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
