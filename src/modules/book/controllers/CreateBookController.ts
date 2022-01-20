import { Request, Response } from "express"
import { CreateBookService } from "../services/CreateBookService"

class CreateBookController{
    public async handle(request:Request,response:Response):Promise<Response>{
        const {name,
            description,
            pages,
            quantity,
            category,
            author} = request.body
        const createBookService = new CreateBookService()
        const available = quantity
        const book = await createBookService.execute({
            name,
            description,
            pages,
            quantity,
            available,
            category,
            author
        })

        return response.json(book)
    }
}
export {CreateBookController}