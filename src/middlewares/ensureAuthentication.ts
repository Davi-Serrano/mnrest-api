import { Request, Response, NextFunction} from "express"
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
    const userTokenRepository = new UsersRefreshTokenRepository();

    if(!authHeader){
        throw new AppError("Token Missing");
    }

    const [, token] = authHeader.split(" ");

    try{
        const { sub: user_id } = verify(
            token, 
            auth.secret_refresh_token) as IPayLoad;
        
        const user = await userTokenRepository.findByUserIdAndRefreshToken(user_id, token);


        if(!user){
            throw new AppError("User does not Exists!", 401)
        }

        next()
    }catch{
        throw new AppError("Invalid Token", 401);
    }


}