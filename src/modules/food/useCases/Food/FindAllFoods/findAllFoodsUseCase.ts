import { inject, injectable } from "tsyringe";
import { IFoodRepository } from "../../../repositories/IFoodRepository";


class FindAllFoodsUseCase{
    constructor(  private foodRepository: IFoodRepository){};

    async execute(){
        const allFoods = await this.foodRepository.findAll();

        return allFoods
    }  
};

export { FindAllFoodsUseCase };