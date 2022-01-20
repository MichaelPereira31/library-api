import { getCustomRepository } from "typeorm"
import { BookRepository } from "../typeorm/repository/BookRepository"

class RemoveBookService{
    async execute(id:any):Promise<void>{
        const bookRepository = getCustomRepository(BookRepository)
        const book = await bookRepository.findOne(id)
        if(!book){
            throw new Error(`Book not found`)
        }
        await bookRepository.remove(book)

    }
}
export {RemoveBookService}