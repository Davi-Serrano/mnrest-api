import { AppError } from "../../../../erros/appError";
import { User } from "../../model/user";
import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";


class DeleteUserUseCase {
    constructor(private userRepository: IPostgreSQLDBRepository){}

    async execute(user: User){

        const {name } = user 

        const userExists = await this.userRepository.findByName(name);

        if(!userExists){
            throw new AppError("User don't exists!")
        }

        await this.userRepository.deleteUser(user)
    }
}

export { DeleteUserUseCase };