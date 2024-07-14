import { IPeople } from "./people.intarfece";

export interface IPeopleUsecase {
  create(): Promise<void>;
  findAll(): Promise<IPeople[]>;
}
