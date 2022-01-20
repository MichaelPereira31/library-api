import { Request, Response } from "express";
import { RemoveBookService} from '../services/RemoveBookService'
class RemoveBookController{
    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const removeBook = new RemoveBookService()
        const book = await removeBook.execute(id)
        return response.json(book)
    }
}

export {RemoveBookController}