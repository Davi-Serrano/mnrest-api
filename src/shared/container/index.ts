import { container } from "tsyringe"

import { IPostgreSQLDBRepository } from "../../modules/user/repositories/IPostgreSQLDBRepository"
import { UsersRepository } from "../../modules/user/repositories/implemantations/userRepository"

import { ICategoryRepository } from "../../modules/food/repositories/ICategoryRepository"
import { CategoryRepository } from "../../modules/food/repositories/implementations/categoryRepository"

import { IFoodRepository } from "../../modules/food/repositories/IFoodRepository"
import { FoodRepository } from "../../modules/food/repositories/implementations/foodRepository"

import { UsersRefreshTokenRepository } from "../../modules/user/repositories/implemantations/userTokenRepository"
import { IUsersRefreshToken } from "../../modules/user/repositories/IUserRefreshToken"

import { IDateProvider } from "../DateProvider/IDateProiver"
import { DayJsProvider } from "../DateProvider/DayJsDateProvider"



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

container.registerSingleton<IUsersRefreshToken>(
    "UsersRefreshTokenRepository", 
    UsersRefreshTokenRepository
)

container.registerSingleton<IDateProvider>(
    "DayJsProvider", 
    DayJsProvider
)
