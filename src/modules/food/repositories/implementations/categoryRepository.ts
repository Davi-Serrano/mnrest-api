import { getRepository, Repository } from "typeorm";
import { CategoryFood } from "../../model/category";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<CategoryFood>;

    constructor(){
        this.repository = getRepository(CategoryFood)
    };

    async create(name: string){
        const category = this.repository.create({
            name,
        });

        await this.repository.save(category);
    };

    async findAll(){
        const all = await this.repository.find();

        return all;
    };

    async findById(id: string): Promise<CategoryFood>{
        const category = await this.repository.findOne({id}) as CategoryFood;
        
        return category;
    };

    async findByName(name: string): Promise<CategoryFood>{
        const category = await this.repository.findOne({name}) as CategoryFood;
        
        return category;
    };

    async delete(id: string){
        await this.repository.delete(id);
    };
}

export { CategoryRepository };