import { UserToken } from "../../model/userTokens";
import { ICreateUserTokenDTO, IUsersTokenRepository } from "../IUserRefreshToken";

class UsersTokenInMemory implements IUsersTokenRepository{
    usersTokens: UserToken[] = [];


    async create({ user_id, expires_date, refresh_token }: ICreateUserTokenDTO): Promise<UserToken> {
        const userToken = new UserToken();

        Object.assign(userToken,{
            user_id,
            expires_date,
            refresh_token
        })

        this.usersTokens.push(userToken);

        return userToken
    }

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserToken> {
        const userToken = this.usersTokens.find((ut) => ut.user_id === user_id  && ut.refresh_token === refresh_token) as UserToken;

        return userToken
    }
    
    async findByByRefreshToken(refresh_token: string): Promise<UserToken>{
        const userTokens = this.usersTokens.find((ut) => ut.refresh_token === refresh_token) as UserToken;

        return userTokens
    }

    async deleteById(id: string | undefined): Promise<void> {
        const userToken = this.usersTokens.find( ut => ut.id === id) as UserToken;
        
        this.usersTokens.splice(
            this.usersTokens.indexOf(userToken)
        )
    }

}

export { UsersTokenInMemory };