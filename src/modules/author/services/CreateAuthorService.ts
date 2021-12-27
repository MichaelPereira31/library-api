import { getCustomRepository } from "typeorm"
import { Author } from "../typeorm/entities/Author"
import { AuthorRepository } from "../typeorm/repository/AuthorRepository"

interface IRquest{
    name_first:string;
    surname:string;
}
class CreateAuthorService{
    public async execute({name_first,surname}):Promise<Author>{
        const authorRepository = getCustomRepository(AuthorRepository)
        const author = await authorRepository.create({
            name_first,
            surname
        })
        await authorRepository.save(author)
        return author
    }
}
export {CreateAuthorService}