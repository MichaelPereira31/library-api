import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repository/UserRepository";

interface IRequest{
    id:string;
    name:string;
    email: string;
    contact:string;
}
class UpdateUserService{
    public async execute({id,name,email,contact}):Promise<User>{
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findOne({id})
        if(!user){
            throw new Error('user not found ')
        }
        user.name = name
        user.contact = contact
        user.email = email

        await userRepository.save(user)

        return user
    }
}
export {UpdateUserService}