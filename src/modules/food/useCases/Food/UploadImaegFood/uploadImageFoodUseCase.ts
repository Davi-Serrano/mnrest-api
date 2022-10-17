import { inject, injectable } from "tsyringe";
import { deleteFlie } from "../../../../../utils/file";
import { IFoodRepository } from "../../../repositories/IFoodRepository";


interface IRequest {
    food_id: string;
    image_file: string;
}

@injectable()
class UploadImageFoodUseCase{
    constructor(
        @inject("FoodRepository")
        private foodRepository: IFoodRepository
    ){}

    async execute({image_file, food_id}: IRequest) {
        const food = await this.foodRepository.findById(food_id);

        if(food.image_food){
            await deleteFlie(`./tmp/foods/${food.image_food}`);
        }

        food.image_food = image_file;

        await this.foodRepository.create(food);
    }
};

export { UploadImageFoodUseCase }