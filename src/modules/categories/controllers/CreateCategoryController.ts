import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

class CreateCategoryController{
    public async handle(request:Request, response:Response):Promise<Response>{
        const {name} = request.body

        const createCategory = new CreateCategoryService()

        const category = await createCategory.execute(name)

        return response.json(category)
    }
}
export {CreateCategoryController}