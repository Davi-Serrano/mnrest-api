import { Request, Response } from "express";
import { container } from "tsyringe";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController{
    async handle( req: Request, res: Response){
        const token = req.body.token || req.headers["x-acess-token"] || req.query.token;

        const refreshTokenUserCase = container.resolve(RefreshTokenUseCase);

        const refresh_token = await refreshTokenUserCase.execute(token);

        res.json(refresh_token);
    };

};

export { RefreshTokenController };