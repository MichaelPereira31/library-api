import { Request, Response } from "express";
import { ListBookService } from "../services/ListBookService";

class ListBookController{
    async handle(request:Request, response:Response):Promise<Response>{
        const listBook = new ListBookService()
        const books = await listBook.execute()
        return response.json(books)
    }
}

export {ListBookController}