import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repository/UserRepository";
import {hash} from 'bcryptjs'

interface IRequest{
    name:string;
    email: string;
    contact:string;
    password: string;
    admin?: boolean;
}

class CreateUserService{
    
    public async execute({name,email,contact,password,admin}:IRequest):Promise<User>{
        const userRepository = getCustomRepository(UserRepository)

        const userEmailExist = await userRepository.findOne({email})
        const userContactExist = await userRepository.findOne({contact})

        if(userEmailExist || userContactExist){
            throw new Error('Existing Email or Contact')
        }
        const passwordHash = await hash(password,8)

        const user = await userRepository.create({
            name,
            email,
            contact,
            password: passwordHash,
            admin
        })

        await userRepository.save(user)

        return user
    }
}
export {CreateUserService}