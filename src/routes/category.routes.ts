import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmiin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { CreateCategoryController } from "../modules/food/useCases/Category/CreateCategory/createCategoryController";

import  findAllCategoriesController  from "../modules/food/useCases/Category/FindAllCategories";

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", ensureAuthentication, ensureAdmin, createCategoryController.handle);

categoriesRoutes.get("/", (req, res)=>{
    return findAllCategoriesController().handle(req, res);
 });

export { categoriesRoutes };