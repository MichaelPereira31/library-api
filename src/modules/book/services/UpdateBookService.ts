import { getCustomRepository } from "typeorm";
import { Book } from "../typeorm/entities/Book";
import { BookRepository } from "../typeorm/repository/BookRepository";
interface IRequest{
    id:any;
    name:string;
    description:string;
    pages:number;
    quantity:number;
    available:number;
    category:any;
    author:any;
}
class UpdateBookService{
    async execute({id,name,description,pages,quantity,available,category,author}:IRequest):Promise<Book>{
        const bookRepository = getCustomRepository(BookRepository);
        const book = await bookRepository.findOne(id);
        if(!book){
            throw new Error(`Book not found`)
        }
        book.name = name
        book.description = description
        book.pages = pages
        book.quantity = quantity
        book.available = available
        book.category = category
        book.author = author

        await bookRepository.save(book)
        return book
        }
}
export {UpdateBookService}