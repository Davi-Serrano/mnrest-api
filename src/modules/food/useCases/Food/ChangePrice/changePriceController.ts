import { Request, Response } from "express";
import { container } from "tsyringe";
import { ChangePriceUseCase } from "./changePriceUseCase"

class ChangePriceController {
    constructor(private changePriceUseCase: ChangePriceUseCase){};

    async handle(req: Request, res: Response):Promise<Response>{
        const { id, newPrice } = req.body;

        await this.changePriceUseCase.execute(id, newPrice);

        return res.setHeader("accpetd", "token").sendStatus(201)
    }
}

export { ChangePriceController };