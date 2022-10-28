import { Request, Response, NextFunction, request} from "express"
import { verify } from "jsonwebtoken";
import auth from "../config/auth";
import { AppError } from "../erros/appError";
import { UsersRepository } from "../modules/user/repositories/implemantations/userRepository";
import { UsersRefreshTokenRepository } from "../modules/user/repositories/implemantations/userTokenRepository";

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
        const { sub: user_id } = verify(
            token, 
            auth.secret_token) as IPayLoad;

        request.user = {
            id: user_id
        }
        

        next()
    }catch{
        throw new AppError("Invalid Token", 401);
    }


}