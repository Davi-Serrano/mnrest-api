import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

class DeleteCategorieUseCase {
    constructor(private categoryRepository: ICategoryRepository){};

    async execute(category_id: string){
         await this.categoryRepository.delete(category_id);

    };
}

export { DeleteCategorieUseCase };