import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";


class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase){}

    handle(req: Request, res: Response){
        const user = req.body.user

        this.deleteUserUseCase.execute(user)

        res.sendStatus(201)
    }
}

export { DeleteUserController }