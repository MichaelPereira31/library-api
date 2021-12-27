import { getCustomRepository } from "typeorm";
import { Category } from "../typeorm/entities/Category";
import { CategoryRepository } from "../typeorm/repository/CategoryRepository";


class CreateCategoryService{
    public async execute(name:string):Promise<Category>{
        
        const categoryRepository = getCustomRepository(CategoryRepository)
        
        const categoryExists = await categoryRepository.findOne(name)
        
        
        if(categoryExists){
            throw new Error('Categoria já existe')
        }

        const category = categoryRepository.create({
            name
        })

        await categoryRepository.save(category)

        return category
    }
}

export{CreateCategoryService}