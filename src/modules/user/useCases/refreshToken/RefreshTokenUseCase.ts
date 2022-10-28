import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import auth from "../../../../config/auth";
import { AppError } from "../../../../erros/appError";
import { IDateProvider } from "../../../../shared/DateProvider/IDateProiver";
import { IUsersTokenRepository } from "../../repositories/IUserRefreshToken";

interface  IPayload {
    sub:  string;
    name: string
}

interface ITokenRespose {
    token: string;
    refresh_token: string
}

@injectable()
class RefreshTokenUseCase{

    constructor(
        @inject("UsersRefreshTokenRepository")
        private usersTokenRepository: IUsersTokenRepository,
        @inject("DayJsProvider")
        private dayJsProvider: IDateProvider
    ){};

    async execute(token: string): Promise<ITokenRespose>{
        const { name, sub} = verify(token, auth.secret_refresh_token) as IPayload;

        const user_id = sub;
        const userToken = await this.usersTokenRepository.findByUserIdAndRefreshToken(user_id, token);

        if(!userToken){
                throw new AppError("Refresh Token does not Exist!");
        };

        await this.usersTokenRepository.deleteById(userToken.id);

        const refresh_token = sign({ name }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token
        });

        const expires_date = this.dayJsProvider.addDays(auth.expires_refresh_token_days);

        await this.usersTokenRepository.create({
            expires_date,
            refresh_token,
            user_id
        })

        const NewToken = sign({}, auth.secret_token ,{
            subject: user_id,
            expiresIn: auth.expires_in_token,
        });

        return {
            refresh_token,
            token: NewToken
        }
    }
};

export { RefreshTokenUseCase };