import { Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken";
import { AppError } from "../erros/appError";
import { UsersRepository } from "../modules/user/repositories/implemantations/userRepository";

interface IPayLoad{
    sub: string;
}

export async function ensureAuthentication(req: Request, res: Response, next: NextFunction) {
    
    const authHeader = req.headers.authorization;

    if(!authHeader){
        throw new AppError("Token Missing");
    }

    const [, token] = authHeader.split(" ");

    try{
        const { sub: user_id } = verify(token, "ee11cbb19052e40b07aac0ca060c23ee") as IPayLoad;
        
        const userRepository = new UsersRepository();
        const user = await userRepository.findById(user_id)


        if(!user){
            throw new AppError("User does not Exists!")
        }

        next()
    }catch{
        throw new AppError("Invalid Token");
    }


}