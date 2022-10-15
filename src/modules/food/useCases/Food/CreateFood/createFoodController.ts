import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFoodUseCase } from "./createFoodUseCase";

class CreateFoodController {
    async handle(req: Request, res: Response){
        const { name, description, price, category_id} = req.body
        
        const createFoodUseCase = container.resolve(CreateFoodUseCase);

        await createFoodUseCase.execute({name, description, price, category_id});

        res.sendStatus(201);
    }
}

export { CreateFoodController };