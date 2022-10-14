import { User } from "../../model/user";
import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";

class ListUsersUseCase {
    constructor(private userRepository: IPostgreSQLDBRepository ){}

    async execute(): Promise<User[]>{
        const allUsers = await this.userRepository.getUsers()

        return allUsers
    }
}

export { ListUsersUseCase}