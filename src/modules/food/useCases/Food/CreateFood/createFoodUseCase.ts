import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../erros/appError";
import { IFoodDTO, IFoodRepository } from "../../../repositories/IFoodRepository";

@injectable()
class CreateFoodUseCase {
    constructor(
        @inject("FoodRepository")
        private foodRepository: IFoodRepository
    ){};

    async execute({ name, description, category_id, price }: IFoodDTO){
        const food = await this.foodRepository.findByName(name);

        if(food){
            throw new AppError("Food already Exists!");
        }
    
        await this.foodRepository.create({name, description, category_id, price});
    }
};

export { CreateFoodUseCase };