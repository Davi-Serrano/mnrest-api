import { inject, injectable } from "tsyringe"; 
import { AppError } from "../../../../../erros/appError";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ){}

    async execute( name: string): Promise<void>{       
        const category = await this.categoryRepository.findByName(name);

        if(category){
            throw new AppError("Category already Exists!");
        }
    
        await this.categoryRepository.create(name);
    }
};

export { CreateCategoryUseCase };