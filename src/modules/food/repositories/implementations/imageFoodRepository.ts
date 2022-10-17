import { getRepository, Repository } from "typeorm";
import { ImageFood } from "../../model/image";
import { IImageFoodRepository } from "../IImageFoodRepository";

class ImageFoodRepository implements IImageFoodRepository{
    private repository: Repository<ImageFood>;
    constructor(){
        this.repository = getRepository(ImageFood);
    }

    async create(image_name: string, food_id: string){
        const image = this.repository.create({
            image_name,
            food_id,
        });

        await this.repository.save(image);
    }

    async findById(id:string){

        const imageFood = await this.repository.findOne({id}) as ImageFood;

        return imageFood

    }
};

export { ImageFoodRepository }