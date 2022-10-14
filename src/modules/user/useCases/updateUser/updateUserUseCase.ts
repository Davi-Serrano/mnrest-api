import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";
import { UserUpdateNameDTO } from "../../repositories/IUserRepository";

class UpdateUserUseCase {
    constructor(private usersReposioty: IPostgreSQLDBRepository){}

    async execute({name, actualName}: UserUpdateNameDTO){
        await this.usersReposioty.updateName({name, actualName})
    }
}

export { UpdateUserUseCase }