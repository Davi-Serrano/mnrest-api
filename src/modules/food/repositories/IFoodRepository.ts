import { Food } from "../model/food";

interface IFoodDTO {
    name: string; 
    price: string;
    description: string;
    category_id: string;
    image_food?: string;
    id?: string;
}


interface IFoodRepository {
    create(data: IFoodDTO): Promise<void>;
    findByName(name: string): Promise<Food>;
    findById(id: string): Promise<Food>;
    findAll():Promise<Food[]>
    deleteFood(id:string): Promise<void>;
    changePrice(id: string, newPrice: string): Promise<void>;
}

export { IFoodRepository, IFoodDTO }