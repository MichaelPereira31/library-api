import { Request, Response } from "express";
import {UpdateBookService} from "../services/UpdateBookService"
class UpdateBookController{
    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const {name,
            description,
            pages,
            quantity,
            category,
            author} = request.body

        const updateBook = new UpdateBookService()
        const available = quantity
        const book = await updateBook.execute({id, name, description, pages, quantity,available,category,author})
        return response.json(book)
    }
}
export {UpdateBookController}