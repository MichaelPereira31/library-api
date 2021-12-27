import { getCustomRepository } from "typeorm";
import { Category } from "../typeorm/entities/Category";
import { CategoryRepository } from "../typeorm/repository/CategoryRepository";

interface IRequest{
    id:string
    name:string;
}
class UpdateCategoryService{
    public async execute({id,name}:IRequest):Promise<Category>{
        const categoryRepository = getCustomRepository(CategoryRepository)
        
        const category = await categoryRepository.findOne({id})

        if(!category){
            throw new Error('Categoria não encontrada')
        }
        category.name = name

        await categoryRepository.save(category)

        return category
    }
}
export {UpdateCategoryService}