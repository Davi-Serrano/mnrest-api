

import { CategoryRepositoryInMemory } from "../../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../CreateCategory/createCategoryUseCase";
import { FindAllCategoriesUseCase } from "./findAllCategoriesUseCase";

let categoriesRepositoryInMemory : CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;
let findAllCategoriesUseCase: FindAllCategoriesUseCase
;

describe("Delete a User", ()=>{
    beforeEach(()=>{
        categoriesRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
        findAllCategoriesUseCase = new FindAllCategoriesUseCase(categoriesRepositoryInMemory);
        
    
    });

    it("Should be able to list all users", async ()=>{

        const category = {
            name: "jonhatan Doe"
        };

        const category2 = {
            name: "jonh Doe"
        };

        await createCategoryUseCase.execute(category.name)
        await createCategoryUseCase.execute(category2.name)

        const allUsers = await findAllCategoriesUseCase.execute();
       
        expect(allUsers).toHaveLength(2);
    })

  
});