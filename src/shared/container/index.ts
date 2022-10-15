import { container } from "tsyringe"
import { ICategoryRepository } from "../../modules/food/repositories/ICategoryRepository"
import { IFoodRepository } from "../../modules/food/repositories/IFoodRepository"
import { CategoryRepository } from "../../modules/food/repositories/implementations/categoryRepository"
import { FoodRepository } from "../../modules/food/repositories/implementations/foodRepository"
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

container.registerSingleton<IFoodRepository>(
    "FoodRepository", 
    FoodRepository
)