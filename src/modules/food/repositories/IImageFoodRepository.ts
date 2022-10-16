
interface IImageFoodRepository {
    create(image_name: string, food_id: string): Promise<void>;
}

export { IImageFoodRepository }