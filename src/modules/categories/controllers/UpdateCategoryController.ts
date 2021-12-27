import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

class UpdateCategoryController{
    public async handle(request:Request,response:Response):Promise<Response>{
        const {id} = request.params

        const {name} = request.body

        const updateCategoryService = new UpdateCategoryService()

        const author = await updateCategoryService.execute({
            id,
            name
        })

        return response.json(author)
    }
}
export {UpdateCategoryController}