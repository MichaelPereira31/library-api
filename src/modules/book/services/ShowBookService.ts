import { getCustomRepository } from "typeorm";
import { Book } from "../typeorm/entities/Book";
import { BookRepository } from "../typeorm/repository/BookRepository";

class ShowBookService{
    async execute(id:any):Promise<Book>{
        const bookRepository = getCustomRepository(BookRepository)
        const book = await bookRepository.findOne(id,{relations:['category',
    'author']});
        return book
    }
}
export {ShowBookService} 