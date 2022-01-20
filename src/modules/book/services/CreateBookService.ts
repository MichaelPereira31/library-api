import { getCustomRepository } from "typeorm";
import { Book } from "../typeorm/entities/Book";
import { BookRepository } from "../typeorm/repository/BookRepository";

interface IRequest{
    name:string;
    description:string;
    pages:number;
    quantity:number;
    available:number;
    category:any;
    author:any;
}
class CreateBookService{
    public async execute({name,description,pages,quantity,available,category,author}:IRequest){
        
        const bookRepository = getCustomRepository(BookRepository)
        
        const book = await bookRepository.create({
            name,
            description,
            pages,
            quantity,
            available,
            category,
            author
        })
        
        await bookRepository.save(book)
        return book
    }
}
export {CreateBookService}