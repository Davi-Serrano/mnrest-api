import { Food } from "../model/food";

interface IFoodDTO {
    name: string; 
    price: string;
    description: string;
    category_id: string;
}


interface IFoodRepository {
    create({ name, description, price, category_id}: IFoodDTO): Promise<void>;
    findByName(name: string): Promise<Food>;
    findAll():Promise<Food[]>
}

export { IFoodRepository, IFoodDTO }