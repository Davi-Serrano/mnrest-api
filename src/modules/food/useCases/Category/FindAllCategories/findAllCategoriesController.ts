import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./findAllCategoriesUseCase";

class FindAllCategoriesController {
    constructor(private findAllCategoriesUseCase: FindAllCategoriesUseCase){};
    
    async handle(req: Request, res: Response){
        const all = await this.findAllCategoriesUseCase.execute();

        return res.setHeader("token", "accepted").json(all)
    }
};

export { FindAllCategoriesController };