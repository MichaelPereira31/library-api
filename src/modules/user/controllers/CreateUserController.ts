import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    public async handle(request:Request, response: Response):Promise<Response>{
        const {name,email,contact,password,admin} = request.body
        const createUser = new CreateUserService()
        const user = await createUser.execute({
            name,
            email,
            contact,
            password,
            admin
        })
        return response.json(user)
    }
}

export {CreateUserController}