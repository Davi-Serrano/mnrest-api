import { Food } from "../../model/food";
import { IFoodDTO, IFoodRepository } from "../IFoodRepository";

class FoodRepositoryInMemory implements IFoodRepository{
     foods: Food[] = []
   
   
    async create({name, price, description, category_id, image_food, id}: IFoodDTO): Promise<void> {
        const food = new Food();
        

        await this.foods.save(food);
    }
    
    async findByName(name: string): Promise<Food> {
        const food = await this.foods.findOne({name}) as Food;
        
        return food;
    }

    async findById(id: string): Promise<Food> {
        const food = await this.foods.findOne(id) as Food;
        
        return food;
    }

    async findAll(): Promise<Food[]> {
        const all = await this.foods.find();

        return all
    }

}

export { FoodRepositoryInMemory };