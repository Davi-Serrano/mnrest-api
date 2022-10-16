import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmiin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { CreateFoodController } from "../modules/food/useCases/Food/CreateFood/createFoodController";


const foodRoutes = Router()

const createFoodController = new CreateFoodController();

foodRoutes.post("/", createFoodController.handle);

export { foodRoutes };