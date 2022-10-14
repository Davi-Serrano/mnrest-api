import { Request, Response, NextFunction} from "express"
import { AppError } from "../erros/appError";
import { UsersRepository } from "../modules/user/repositories/implemantations/userRepository";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body

        const userRepository = new UsersRepository()
        const user = await userRepository.findById(id);
        
        if(!user.admin){
            throw new AppError("User is not a admin")
        }

       return next()
}