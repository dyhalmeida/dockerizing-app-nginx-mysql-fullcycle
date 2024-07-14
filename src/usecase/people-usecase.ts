import { IPeopleRepository } from "../interface/people-repository.interface";

export class PeopleUsecase {
  constructor(private readonly peopleRepository: IPeopleRepository) {}

  async create() {
    await this.peopleRepository.create();
  }

  async findAll() {
    return await this.peopleRepository.findAll();
  }
}
