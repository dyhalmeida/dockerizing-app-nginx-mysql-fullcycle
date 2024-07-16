import { IPeople } from "./people.intarfece";

export interface IPeopleRepository {
  create(): Promise<void>;
  findAll(): Promise<IPeople[]>;
}
