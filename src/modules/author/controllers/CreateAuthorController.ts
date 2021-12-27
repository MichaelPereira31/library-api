import { Request, Response } from "express";
import { CreateAuthorService } from "../services/CreateAuthorService";

class CreateAuthorController{
    public async handle(request:Request,response:Response):Promise<Response>{
        const{name_first,surname} = request.body
        const createAuthor = new CreateAuthorService()
        const author = await createAuthor.execute({
            name_first,
            surname
        })
        return response.json(author)
    }
}

export {CreateAuthorController}