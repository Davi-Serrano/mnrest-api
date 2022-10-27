import { inject, injectable } from "tsyringe";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";

import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";
import { IDateProvider } from "../../../../shared/DateProvider/IDateProiver";
import { IUsersTokenRepository } from "../../repositories/IUserRefreshToken";

import { AppError } from "../../../../erros/appError";


interface IRequest{
    name: string;
    password: string;
};

interface IResponse {
    user:{
        name: string,
    };
    token: string;
    refresh_token: string
};

@injectable()
class AuthenticaceUserUseCase{
    constructor(
        @inject("UsersRepository")
        private userRepository: IPostgreSQLDBRepository,
        @inject("UsersRefreshTokenRepository")
        private userTokenRepository: IUsersTokenRepository,
        @inject("DayJsProvider")
        private dayJsProvider: IDateProvider
    ){};

    async execute({name, password}: IRequest): Promise<IResponse>{
        const user = await this.userRepository.findByName(name);
        const { secret_refresh_token, secret_token, expires_in_token, expires_in_refresh_token, expires_refresh_token_days } = auth;

        if(!user){
            throw new AppError("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch){
            throw new AppError("Email or password incorrect");
        };


        const token = sign({}, secret_token ,{
            subject: user.id,
            expiresIn: expires_in_token,
        });

        const refresh_token = sign({ name }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token
        });

        const refresh_token_expires_date = this.dayJsProvider.addDays(expires_refresh_token_days);

        await this.userTokenRepository.create({
            user_id: user.id,
            refresh_token,
            expires_date: refresh_token_expires_date
        });

        const tokenReturn: IResponse = {
            token,
            refresh_token,
            user: {
                name
            }
        };

        return tokenReturn;
    };
};


    export  { AuthenticaceUserUseCase };