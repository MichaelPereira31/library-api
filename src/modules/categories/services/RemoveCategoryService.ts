import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../typeorm/repository/CategoryRepository";

interface IRquest{
    id:string;
}

class RemoveCategoryService{
    public async execute({id}:IRquest):Promise<void>{
        const categoryRepository = getCustomRepository(CategoryRepository)

        const category = await categoryRepository.findOne({id})

        if(!category){
            throw new Error('Categoria não encontrada')
        }

        await categoryRepository.remove(category)
    }
}

export {RemoveCategoryService}