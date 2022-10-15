import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

class CreateCategoryController {
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createategoryUseCase = container.resolve(CreateCategoryUseCase);

        await createategoryUseCase.execute(name);

        res.sendStatus(201);
    }
};

export { CreateCategoryController };