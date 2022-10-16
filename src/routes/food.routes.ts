import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmiin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { CreateFoodController } from "../modules/food/useCases/Food/CreateFood/createFoodController";
import  findAllFoodsController from "../modules/food/useCases/Food/FindAllFoods/";


const foodRoutes = Router()

const createFoodController = new CreateFoodController();

foodRoutes.post("/", createFoodController.handle);

foodRoutes.get("/",  (req, res)=>{
    return findAllFoodsController().handle(req, res);
 });


export { foodRoutes };