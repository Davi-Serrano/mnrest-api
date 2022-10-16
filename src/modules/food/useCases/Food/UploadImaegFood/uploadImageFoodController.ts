import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadImageFoodUseCase } from "./uploadImageFoodUseCase";

interface IFiles {
    filename: string;
}

class UploadImageFoodController{

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const images = req.files as IFiles[];

        const uploadImageUseCase = container.resolve(UploadImageFoodUseCase);

        const image_name = images.map((file) => file.filename);

        await uploadImageUseCase.execute({image_name, food_id: id});

        return res.sendStatus(201)
    }

}

export { UploadImageFoodController };