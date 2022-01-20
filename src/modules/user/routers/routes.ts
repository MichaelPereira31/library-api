import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const listUserController = new ListUserController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()
const routersUser = Router()

routersUser.get('/',listUserController.handle)
routersUser.post('/',createUserController.handle)
routersUser.put('/:id',updateUserController.handle)


export {routersUser}