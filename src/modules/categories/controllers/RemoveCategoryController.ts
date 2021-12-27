import { Request, Response } from "express"
import { RemoveCategoryService } from "../services/RemoveCategoryService"

class RemoveCategoryController{
    public async handle(request:Request,response:Response){
        const {id} = request.params

        const removeCategory = new RemoveCategoryService()

        const category = await removeCategory.execute({id})

        return response.json(category)
        
    }
}
export{RemoveCategoryController}