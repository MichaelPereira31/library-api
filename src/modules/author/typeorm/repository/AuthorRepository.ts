import { EntityRepository, Repository } from "typeorm";
import { Author } from "../entities/Author";

@EntityRepository(Author)
class AuthorRepository extends Repository<Author>{
    
}

export {AuthorRepository}