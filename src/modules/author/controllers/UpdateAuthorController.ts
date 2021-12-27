import { Request, Response } from "express";
import { UpdateAuthorService } from "../services/UpdateAuthorService";

class UpdateAuthorController{
    public async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const {name_first,surname} = request.body
        const updateAuthorService = new UpdateAuthorService()
        const author = await updateAuthorService.execute({
            id,
            name_first,
            surname
        })
        return response.json(author)
    }
}

export {UpdateAuthorController}