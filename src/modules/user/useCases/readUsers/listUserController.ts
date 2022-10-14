import { Request, Response } from "express";
import { ListUsersUseCase } from "./listUserUseCase";

class ListUsersController {
    
    constructor(private listAllUsersUseCase: ListUsersUseCase){}
    
    async handle(req: Request, res: Response){
     
        const allUsers = await this.listAllUsersUseCase.execute();
        
        return res.setHeader("token", "aceepted").json(allUsers)
        
    }
}

export { ListUsersController}