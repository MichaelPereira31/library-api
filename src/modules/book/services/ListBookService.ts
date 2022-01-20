import { getCustomRepository } from "typeorm";
import { Book } from "../typeorm/entities/Book";
import { BookRepository } from "../typeorm/repository/BookRepository";

class ListBookService{
    async execute():Promise<Book[]>{
        const bookRepository = getCustomRepository(BookRepository)
        const books = await bookRepository.find({relations:['category',
        'author']});
        return books
    }
}
export {ListBookService} 