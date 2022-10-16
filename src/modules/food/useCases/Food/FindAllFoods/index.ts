import { FoodRepository } from "../../../repositories/implementations/foodRepository";
import { FindAllFoodsController } from "./findAllFoodsController";
import { FindAllFoodsUseCase } from "./findAllFoodsUseCase";

export default (): FindAllFoodsController => {
    const foodReposiotry = new FoodRepository

    const findAllFoodssUseCase = new FindAllFoodsUseCase(foodReposiotry)

    const findAllFoodsController = new FindAllFoodsController(findAllFoodssUseCase);

    return findAllFoodsController 
};