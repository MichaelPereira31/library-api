import { getCustomRepository } from "typeorm"
import { Author } from "../typeorm/entities/Author"
import { AuthorRepository } from "../typeorm/repository/AuthorRepository"

interface IRquest{
    id:string;
    name_first:string;
    surname:string;

}
class UpdateAuthorService{
    public async execute({id,name_first,surname}):Promise<Author>{
        const authorRepository = getCustomRepository(AuthorRepository)
        const author = await authorRepository.findOne({id})
        if(!author){
            throw new Error('Autor não encontrado')
        }
        author.name_first = name_first
        author.surname = surname

        await authorRepository.save(author)

        return author
    }
}
export {UpdateAuthorService}