import { Router } from "express"
import { CreateBookController } from "../controllers/CreateBookController"
import { ListBookController } from "../controllers/ListBookController"
import { RemoveBookController } from "../controllers/RemoveBookController"
import { ShowBookController } from "../controllers/ShowBookController"
import { UpdateBookController } from "../controllers/UpdateBookController"


const listBookController = new ListBookController()
const showBookController = new ShowBookController()
const createBookController = new CreateBookController()
const updateBookController = new UpdateBookController()
const removeBookController = new RemoveBookController()
const routersBook = Router()

routersBook.get('/',listBookController.handle)
routersBook.get('/:id',showBookController.handle)
routersBook.post('/',createBookController.handle)
routersBook.put('/:id',updateBookController.handle)
routersBook.delete('/:id',removeBookController.handle)

export {routersBook}