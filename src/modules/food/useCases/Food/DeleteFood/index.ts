import { FoodRepository } from "../../../repositories/implementations/foodRepository";
import { DeleteFoodController  } from "./deleteFoodController";
import { DeleteFoodUseCase } from "./deleteFoodUseCase";

export default (): DeleteFoodController => {
    const foodRepository = new FoodRepository()

    const deleteFoodUseCase = new DeleteFoodUseCase(foodRepository)

    const deleteFoodController = new DeleteFoodController(deleteFoodUseCase);

    return deleteFoodController 
};