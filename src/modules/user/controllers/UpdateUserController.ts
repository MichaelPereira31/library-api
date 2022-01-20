import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController{
    public async handle(request:Request, response:Response):Promise<Response>{
        const {id} = request.params
        const {name,email,contact} = request.body
        const userUpdate = new UpdateUserService()
        const user = await userUpdate.execute({
            id,
            name,
            email,
            contact
        })
        return response.json(user)
    }
}
export{UpdateUserController}