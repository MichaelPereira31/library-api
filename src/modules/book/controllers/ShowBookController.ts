import { Request, Response } from "express";
import { ShowBookService } from "../services/ShowBookService";

class ShowBookController{
    async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const showBook = new ShowBookService()
        const books = await showBook.execute(id)
        return response.json(books)
    }
}

export {ShowBookController}