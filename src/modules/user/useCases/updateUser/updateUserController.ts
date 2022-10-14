import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";

class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase){}

    async handle(req: Request, res: Response){
        const { name, actualName } = req.body.user

        await this.updateUserUseCase.execute({name, actualName})

        return res.sendStatus(201)
    }
}

export { UpdateUserController }