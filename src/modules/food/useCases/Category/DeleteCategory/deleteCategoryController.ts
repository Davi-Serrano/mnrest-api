import { Request, Response } from "express";
import { DeleteCategorieUseCase } from "./deleteCategoryUseCase";

class DeleteCategorieController {
    constructor(private deleteCategorieUseCase: DeleteCategorieUseCase){};
    
    async handle(req: Request, res: Response){
        const { category_id } = req.body

       await this.deleteCategorieUseCase.execute(category_id);

        return res.setHeader("token", "accepted").json("Category deleted with success")
    }
};

export { DeleteCategorieController };