import { Request, Response } from "express";
import { ListAuthorService } from "../services/ListAthorService";

class ListAuthorController{
    public async handle(request:Request, response:Response):Promise<Response>{
        const listAuthors = new ListAuthorService()
        const authors = await listAuthors.execute()
        return response.json(authors)
    }
}
export {ListAuthorController}