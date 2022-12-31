import { FoodRepository } from "../../../repositories/implementations/foodRepository";
import { ChangePriceController } from "./changePriceController";
import { ChangePriceUseCase } from "./changePriceUseCase";

export default (): ChangePriceController => {
    const foodRepository = new FoodRepository()

    const changePriceUseCase = new ChangePriceUseCase(foodRepository)

    const changePriceController = new ChangePriceController(changePriceUseCase);

    return changePriceController 
};