import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { CreateCategoryController } from "../modules/food/useCases/Category/CreateCategory/createCategoryController";

import  findAllCategoriesController  from "../modules/food/useCases/Category/FindAllCategories";
import deleteCategorieController from "../modules/food/useCases/Category/DeleteCategory"

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", ensureAuthentication, ensureAdmin, createCategoryController.handle);

categoriesRoutes.delete("/", ensureAuthentication, ensureAdmin, (req, res)=>{
    return deleteCategorieController().handle(req, res);
 });

categoriesRoutes.get("/", (req, res)=>{
    return findAllCategoriesController().handle(req, res);
 });


 
export { categoriesRoutes };