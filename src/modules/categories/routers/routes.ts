import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { ListCategoryController } from "../controllers/ListCategoryController";
import { RemoveCategoryController } from "../controllers/RemoveCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

const listCategoryController = new ListCategoryController()
const createCategoryController = new CreateCategoryController()
const updateCategoryController = new UpdateCategoryController()
const removeCategoryController = new RemoveCategoryController()
const routersCategory = Router()

routersCategory.get('/',listCategoryController.handle)
routersCategory.post('/',createCategoryController.handle)
routersCategory.put('/:id',updateCategoryController.handle)
routersCategory.delete('/:id',removeCategoryController.handle)

export{routersCategory}