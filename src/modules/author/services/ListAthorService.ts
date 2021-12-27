import { getCustomRepository } from "typeorm";
import { Author } from "../typeorm/entities/Author";
import { AuthorRepository } from "../typeorm/repository/AuthorRepository";

class ListAuthorService{
    public async execute():Promise<Author[]>{
        const authorRepository = getCustomRepository(AuthorRepository)
        const authors = await authorRepository.find()
        return authors
    }
}
export {ListAuthorService}