import { container } from "tsyringe"
import { UsersRepository } from "../../modules/user/repositories/implemantations/userRepository"
import { IPostgreSQLDBRepository } from "../../modules/user/repositories/IPostgreSQLDBRepository"



container.registerSingleton<IPostgreSQLDBRepository>(
    "UsersRepository", 
    UsersRepository
)