import dotenv from "dotenv";

dotenv.config();

export const host = process.env.MYSQL_HOST;
export const user = process.env.MYSQL_USER;
export const password = process.env.MYSQL_PASSWORD;
export const database = process.env.MYSQL_DATABASE;
export const port = process.env.APP_PORT;
