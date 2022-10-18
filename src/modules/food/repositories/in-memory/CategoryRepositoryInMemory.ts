import { CategoryFood } from "../../model/Category";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: CategoryFood[] = [];

    async create(name: string): Promise<void> {
        const category = new CategoryFood();

        Object.assign(category,{
            name,        });

        this.categories.push(category);
    }


    async findAll(): Promise<CategoryFood[]> {
       const all = this.categories;
      
       return all;
    }

    async findById(id: string): Promise<CategoryFood> {
        const category = this.categories.find((category)=> category.id === id ) as CategoryFood;

        return user;
    }

    async findByName(name: string): Promise<CategoryFood> {
        const category = this.categories.find((category)=> category.name === name ) as CategoryFood;

        return category;
    }

    async delete(category: CategoryFood): Promise<void> {
        const categoryWillBeDeleted = this.categories.indexOf(user);

        this.categories.splice(categoryWillBeDeleted, 1);
    }


}

export { UsersRepositoryInMemory }
