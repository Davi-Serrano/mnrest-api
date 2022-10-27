import { getRepository, Repository } from "typeorm";
import { UserToken } from "../../model/userTokens";
import { ICreateUserTokenDTO, IUsersTokenRepository } from "../IUserRefreshToken";


class UsersRefreshTokenRepository implements IUsersTokenRepository {
    private repository: Repository<UserToken>;

    constructor(){
            this.repository = getRepository(UserToken);
    }
   
    async create({ user_id, expires_date, refresh_token }: ICreateUserTokenDTO): Promise<UserToken> {

        const userToken = this.repository.create({
            expires_date,
            refresh_token,
            user_id
        });
      
        await this.repository.save(userToken);

        return userToken;
    };

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserToken> {
        const userTokens = await this.repository.findOne({
            user_id,
            refresh_token
        }) as UserToken ;

        return userTokens;
    };

    async findByByRefreshToken(refresh_token: string): Promise<UserToken>{
        const userTokens = await this.repository.findOne({
            refresh_token
        }) as UserToken ;

        return userTokens
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }
};

export { UsersRefreshTokenRepository };