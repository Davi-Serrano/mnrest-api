import { ImageFood } from "../model/image";

interface IImageFoodRepository {
    create(image_name: string, food_id: string): Promise<void>;
    findById(id: string): Promise<ImageFood>
}

export { IImageFoodRepository }