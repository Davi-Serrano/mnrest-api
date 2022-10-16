import { inject, injectable } from "tsyringe";
import { IImageFoodRepository } from "../../../repositories/IImageFoodRepository";

interface IRequest {
    food_id: string;
    image_name: string[];
}

@injectable()
class UploadImageFoodUseCase{
    constructor(
        @inject("ImageFoodRepository")
        private imageFoodRepository: IImageFoodRepository
    ){}

    async execute({image_name, food_id}: IRequest) {
        image_name.map(async (image) => {
            await this.imageFoodRepository.create(image, food_id)
        });
    }
}

export { UploadImageFoodUseCase }