import { Router } from "express";
import multer from "multer";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";

import uploadConfig from "../config/upload"

import { CreateFoodController } from "../modules/food/useCases/Food/CreateFood/createFoodController";

import  findAllFoodsController from "../modules/food/useCases/Food/FindAllFoods/";

import { UploadImageFoodController } from "../modules/food/useCases/Food/UploadImaegFood/uploadImageFoodController";

import deleteFoodController  from "../modules/food/useCases/Food/DeleteFood/";
import changePriceController  from "../modules/food/useCases/Food/ChangePrice/";


const foodRoutes = Router()

const createFoodController = new CreateFoodController();
const uploadImageFoodController = new UploadImageFoodController();

const uploadImage = multer(uploadConfig.upload("./tmp/foods"));

foodRoutes.post("/", ensureAuthentication, ensureAdmin,createFoodController.handle);

foodRoutes.patch(
    "/image", 
    ensureAuthentication, 
    ensureAdmin,
    uploadImage.single("foods") ,
    uploadImageFoodController.handle
);

foodRoutes.get("/",  (req, res)=>{
    return findAllFoodsController().handle(req, res);
 });

 foodRoutes.patch("/price",  (req, res)=>{
    return changePriceController().handle(req, res);
 });

 foodRoutes.delete("/", ensureAdmin, ensureAuthentication, (req, res)=>{
    return deleteFoodController().handle(req, res);
 });


export { foodRoutes };