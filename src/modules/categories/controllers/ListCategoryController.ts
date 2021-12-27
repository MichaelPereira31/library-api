import { Request, Response } from "express";
import { ListCategoryService } from "../services/ListCategoryService";

class ListCategoryController{
    public async handle(request:Request,repsonse:Response):Promise<Response>{
        const listCategory = new ListCategoryService()
        const categories = await listCategory.execute()
        return repsonse.json(categories)
    }
}
export { ListCategoryController}