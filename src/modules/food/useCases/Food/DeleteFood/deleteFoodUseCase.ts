import { IFoodRepository } from "../../../repositories/IFoodRepository";

class DeleteFoodUseCase {
    constructor(private foodRepository: IFoodRepository){};

    async execute(id: string){
         await this.foodRepository.deleteFood(id);

    };
};

export { DeleteFoodUseCase };