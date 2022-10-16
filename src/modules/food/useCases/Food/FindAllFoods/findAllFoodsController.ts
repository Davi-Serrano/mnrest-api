import { Request, Response } from "express";
import { FindAllFoodsUseCase } from "./findAllFoodsUseCase";

class FindAllFoodsController {
    constructor(private findAllFoodsUseCase: FindAllFoodsUseCase){};

    async handle(req: Request, res: Response){
        const allFoods = await this.findAllFoodsUseCase.execute();

        return res.setHeader("token", "accepted").json(allFoods)
    }
};

export { FindAllFoodsController };