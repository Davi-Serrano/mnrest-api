import { UserToken } from "../model/userTokens";

interface ICreateUserTokenDTO{
    user_id: string;
    expires_date: string;
    refresh_token: string;
}

interface IUsersRefreshToken {
    create({ user_id, expires_date, refresh_token}: ICreateUserTokenDTO): Promise<UserToken>
}

export{ IUsersRefreshToken, ICreateUserTokenDTO};