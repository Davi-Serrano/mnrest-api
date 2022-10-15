import { container } from "tsyringe"
import { ICategoryRepository } from "../../modules/food/repositories/ICategoryRepository"
import { CategoryRepository } from "../../modules/food/repositories/implementations/categoryRepository"
import { UsersRepository } from "../../modules/user/repositories/implemantations/userRepository"
import { IPostgreSQLDBRepository } from "../../modules/user/repositories/IPostgreSQLDBRepository"



container.registerSingleton<IPostgreSQLDBRepository>(
    "UsersRepository", 
    UsersRepository
)

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository", 
    CategoryRepository
)