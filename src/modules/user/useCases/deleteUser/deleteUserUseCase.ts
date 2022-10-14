import { User } from "../../model/user";
import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";


class DeleteUserUseCase {
    constructor(private userRepository: IPostgreSQLDBRepository){}

    async execute(user: User){
        await this.userRepository.deleteUser(user)
    }
}

export { DeleteUserUseCase };