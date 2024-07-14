import { Request, Response } from "express";
import { IPeopleUsecase } from "../interface/people-usecase.interface";

export class PeopleController {
  constructor(private readonly peopleUsecase: IPeopleUsecase) {}

  async handler(req: Request, res: Response) {
    await this.peopleUsecase.create();
    const peoples = await this.peopleUsecase.findAll();
    res.send(`
       <h1>Full Cycle Rocks!!</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          ${peoples
            .map(
              (people) => `
            <tr>
              <td>${people.id}</td>
              <td>${people.name}</td>
              <td>${people.email}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
      <br />
      <form method="GET" action="/">
        <button type="submit">Add new people</button>
      </form>
    `);
  }
}
