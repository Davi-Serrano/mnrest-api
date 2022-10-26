import { UserToken } from "../model/userTokens";

interface ICreateUserTokenDTO{
    user_id: string | undefined;
    expires_date: Date;
    refresh_token: string;
}

interface IUsersRefreshToken {
    create({ user_id, expires_date, refresh_token}: ICreateUserTokenDTO): Promise<UserToken>
    findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserToken>
    deleteById(id: string | undefined): Promise<void>
}

export{ IUsersRefreshToken, ICreateUserTokenDTO};