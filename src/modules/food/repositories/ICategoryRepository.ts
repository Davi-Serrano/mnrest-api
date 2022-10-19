import { CategoryFood } from "../model/category";

interface ICategoryRepository {
    create(name: string): Promise<void>;
    findByName(name: string): Promise<CategoryFood>
    findById(id: string): Promise<CategoryFood>
    findAll():Promise<CategoryFood[]>
    delete(category: CategoryFood): Promise<void>;
}

export { ICategoryRepository }
