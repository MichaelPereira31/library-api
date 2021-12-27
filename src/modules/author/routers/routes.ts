import { Router } from "express";
import { CreateAuthorController } from "../controllers/CreateAuthorController";
import { ListAuthorController } from "../controllers/ListAuthorController";
import { UpdateAuthorController } from "../controllers/UpdateAuthorController";

const routersAuthor = Router()

const createAuthorController = new CreateAuthorController()
const listAuthorController = new ListAuthorController()
const updateAuthorController = new UpdateAuthorController()

routersAuthor.get('/',listAuthorController.handle)
routersAuthor.post('/',createAuthorController.handle)
routersAuthor.put('/:id',updateAuthorController.handle)

export {routersAuthor}