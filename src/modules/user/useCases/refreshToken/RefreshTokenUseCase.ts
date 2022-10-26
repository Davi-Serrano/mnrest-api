import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import auth from "../../../../config/auth";
import { AppError } from "../../../../erros/appError";
import { IDateProvider } from "../../../../shared/DateProvider/IDateProiver";
import { IUsersRefreshToken } from "../../repositories/IUserRefreshToken";

interface  IPayload {
    sub:  string;
    name: string
}

@injectable()
class RefreshTokenUseCase{

    constructor(
        @inject("UsersRefreshTokenRepository")
        private usersTokenRepository: IUsersRefreshToken,
        @inject("DayJsProvider")
        private dayJsProvider: IDateProvider
    ){};

    async execute(token: string): Promise<string>{
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

        return refresh_token;
    }
};

export { RefreshTokenUseCase };