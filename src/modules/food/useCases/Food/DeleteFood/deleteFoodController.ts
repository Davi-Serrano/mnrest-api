import { Request, Response } from "express";
import { DeleteFoodUseCase } from "./deleteFoodUseCase";

class DeleteFoodController {
    constructor(private deleteCategorieUseCase: DeleteFoodUseCase){};
    
    async handle(req: Request, res: Response){
        const { food_id } = req.body;

       await this.deleteCategorieUseCase.execute(food_id);

        return res.setHeader("token", "accepted").json("Food deleted with success");
    };
};

export { DeleteFoodController };