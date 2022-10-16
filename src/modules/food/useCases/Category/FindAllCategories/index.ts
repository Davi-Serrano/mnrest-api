import { CategoryRepository } from "../../../repositories/implementations/categoryRepository";
import { FindAllCategoriesController } from "./findAllCategoriesController";
import { FindAllCategoriesUseCase } from "./findAllCategoriesUseCase";

export default (): FindAllCategoriesController => {
    const categoryrReposiotry = new CategoryRepository()

    const findAllCategoriesUseCase = new FindAllCategoriesUseCase(categoryrReposiotry)

    const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUseCase);

    return findAllCategoriesController 
};