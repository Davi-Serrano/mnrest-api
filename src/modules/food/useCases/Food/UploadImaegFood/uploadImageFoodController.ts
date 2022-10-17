import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadImageFoodUseCase } from "./uploadImageFoodUseCase";



class UploadImageFoodController{

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const image_file = req.file?.filename  as string
        
        const uploadImageUseCase = container.resolve(UploadImageFoodUseCase);

        await uploadImageUseCase.execute({image_file , food_id: id});

        return res.setHeader("accpetd", "token").sendStatus(201)
    }

}

export { UploadImageFoodController };