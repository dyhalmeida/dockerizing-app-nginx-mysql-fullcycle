import express from "express";
import { PeopleRepository } from "./repository/people-repository";
import { PeopleUsecase } from "./usecase/people-usecase";
import { PeopleController } from "./controller/people-controller";
import { port } from "./constants";

const app = express();
app.use(express.urlencoded({ extended: true }));

const peopleRepository = new PeopleRepository();
const peopleUsecase = new PeopleUsecase(peopleRepository);
const peopleController = new PeopleController(peopleUsecase);

app.get("/", (req, res) => peopleController.handler(req, res));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
