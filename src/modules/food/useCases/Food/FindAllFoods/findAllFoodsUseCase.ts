import { inject, injectable } from "tsyringe";
import { FoodRepository } from "../../../repositories/implementations/foodRepository";

class FindAllFoodsUseCase{
    constructor(  private foodRepository: FoodRepository){};

    async execute(){
        const allFoods = await this.foodRepository.findAll();

        return allFoods
    }  
};

export { FindAllFoodsUseCase };