import { Router } from "express";
import { routersAuthor } from "./modules/author/routers/routes";
import { routersBook } from "./modules/book/routers/routes";
import { routersCategory } from "./modules/categories/routers/routes";
import { routersUser } from "./modules/user/routers/routes";

const routers = Router()

routers.use('/categories',routersCategory)
routers.use('/authors',routersAuthor)
routers.use('/users',routersUser)
routers.use('/books',routersBook)


export {routers}