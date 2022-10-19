import { Food } from "../../model/food";
import { IFoodDTO, IFoodRepository } from "../IFoodRepository";

class FoodRepositoryInMemory implements IFoodRepository{
     foods: Food[] = []
   
   
    async create({name, price, description, category_id, image_food, id}: IFoodDTO): Promise<void> {
        const food = new Food();
        
        Object.assign(food,{
            name,
            price,
            description,
            category_id,
        });

        this.foods.push(food);
    };
    
    async findByName(name: string): Promise<Food> {
        const food = this.foods.find((food)=> food.name === name ) as Food;
        
        return food;
    }

    async findById(id: string): Promise<Food> {
        const food = this.foods.find((food) => food.id === id) as Food;
        
        return food;
    }

    async findAll(): Promise<Food[]> {
        const all = this.foods

        return all
    }

}

export { FoodRepositoryInMemory };