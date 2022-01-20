import { Request, Response } from "express"
import { ListUserService } from "../services/ListUserService"

class ListUserController{
    public async handle(request:Request, response:Response):Promise<Response>{
        const listUserService = new ListUserService()

        const users = await listUserService.execute()

        return response.json(users)
    }
}
export{ListUserController}