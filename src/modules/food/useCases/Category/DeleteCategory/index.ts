import { CategoryRepository } from "../../../repositories/implementations/categoryRepository";
import { DeleteCategorieController } from "./deleteCategoryController";
import { DeleteCategorieUseCase } from "./deleteCategoryUseCase";

export default (): DeleteCategorieController => {
    const categoryrReposiotry = new CategoryRepository()

    const deleteCategorieUseCase = new DeleteCategorieUseCase(categoryrReposiotry)

    const deleteCategorieController = new DeleteCategorieController(deleteCategorieUseCase);

    return deleteCategorieController 
};