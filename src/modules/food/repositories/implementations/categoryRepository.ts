import { getRepository, Repository } from "typeorm";
import { CategoryFood } from "../../model/category";import { ICategoryRepository } from "../ICategoryRepository";
;

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<CategoryFood>

    constructor(){
        this.repository = getRepository(CategoryFood)
    }

    async create(name: string){
        const category = this.repository.create({
            name,
        });

        await this.repository.save(category);
    }

    async findAll(){
        const all = await this.repository.find();

        return all
    }

    async findByName(name: string): Promise<CategoryFood>{
        const user = await this.repository.findOne({name}) as CategoryFood;
        
        return user;
    }

    async delete(name: string){0
        await this.repository.delete(name);
    }
}

export { CategoryRepository };