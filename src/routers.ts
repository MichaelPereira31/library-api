import { Router } from "express";
import { routersAuthor } from "./modules/author/routers/routes";
import { routersCategory } from "./modules/categories/routers/routes";

const routers = Router()

routers.use('/categories',routersCategory)
routers.use('/authors',routersAuthor)

export {routers}