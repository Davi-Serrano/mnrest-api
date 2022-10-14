import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticaceUserUseCase } from "./AuthenticaceUserUseCase";

class AuthenticaceUserController {
    async handle(req: Request, res: Response):Promise<Response>{
        const { password, name } = req.body.user

        const authenticaceUserUseCase = container.resolve(AuthenticaceUserUseCase)

        const token =  await authenticaceUserUseCase.execute({ name, password})

        return res.json(token)
    }

}

export { AuthenticaceUserController };