import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

class FindAllCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository){};

    async execute(){
        const allCategories = await this.categoryRepository.findAll();

        return allCategories;
    };
}

export { FindAllCategoriesUseCase };