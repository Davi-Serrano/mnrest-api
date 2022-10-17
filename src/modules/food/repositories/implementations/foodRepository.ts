import { getRepository, Repository } from "typeorm";
import { Food } from "../../model/food";
import { IFoodDTO, IFoodRepository } from "../IFoodRepository";

class FoodRepository implements IFoodRepository{
    private repository: Repository<Food>
   
    constructor(){
        this.repository = getRepository(Food);
    };

    async create({name, price, description, category_id, image_food, id}: IFoodDTO): Promise<void> {
        const food = this.repository.create({
            name,
            description,
            price,
            category_id,
            image_food,
            id
        });

        await this.repository.save(food);
    }
    
    async findByName(name: string): Promise<Food> {
        const food = await this.repository.findOne({name}) as Food;
        
        return food;
    }

    async findById(id: string): Promise<Food> {
        const food = await this.repository.findOne(id) as Food;
        
        return food;
    }

    async findAll(): Promise<Food[]> {
        const all = await this.repository.find();

        return all
    }

}

export { FoodRepository };