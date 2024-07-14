import { pool } from "../config/database";
import { faker } from "@faker-js/faker";
import { IPeople } from "../interface/people.intarfece";

export class PeopleRepository {
  async create(): Promise<void> {
    const connection = await pool.getConnection();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const name = `${firstName} ${lastName}`;
    const email = faker.internet
      .exampleEmail({ firstName, lastName })
      .toLowerCase();

    await connection.query("INSERT INTO people (name, email) VALUES (?, ?)", [
      name,
      email,
    ]);
    connection.release();
  }

  async findAll(): Promise<IPeople[]> {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT id, name, email FROM people");
    connection.release();
    return rows as IPeople[];
  }
}
