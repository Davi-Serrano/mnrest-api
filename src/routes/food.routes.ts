import { Router } from "express";
import multer from "multer";
import { ensureAdmin } from "../middlewares/ensureAdmiin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import uploadConfig from "../config/upload"
import { CreateFoodController } from "../modules/food/useCases/Food/CreateFood/createFoodController";
import  findAllFoodsController from "../modules/food/useCases/Food/FindAllFoods/";
import { UploadImageFoodController } from "../modules/food/useCases/Food/UploadImaegFood/uploadImageFoodController";


const foodRoutes = Router()

const createFoodController = new CreateFoodController();
const uploadImageFoodController = new UploadImageFoodController();

const uploadImage = multer(uploadConfig.upload("./tmp/foods"));

foodRoutes.post("/", createFoodController.handle);

foodRoutes.post(
    "/image/:id", 
    uploadImage.array("images") ,
    uploadImageFoodController.handle
);

foodRoutes.get("/",  (req, res)=>{
    return findAllFoodsController().handle(req, res);
 });


export { foodRoutes };