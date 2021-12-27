import { getCustomRepository } from "typeorm"
import { Category } from "../typeorm/entities/Category"
import { CategoryRepository } from "../typeorm/repository/CategoryRepository"

class ListCategoryService{
    public async execute():Promise<Category[]>{
        
        const categoryRepository =  getCustomRepository(CategoryRepository)

        const categories = await categoryRepository.find()
        return categories
    }
}
export {ListCategoryService}