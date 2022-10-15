import { CategoryFood } from "../model/category";

interface ICategoryRepository {
    create(name: string): Promise<void>;
    findByName(name: string): Promise<CategoryFood>
    findAll():Promise<CategoryFood[]>
    delete(name: string): Promise<void>;
}

export { ICategoryRepository }