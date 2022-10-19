
import { AppError } from "../../../../../erros/appError";
import { CategoryRepositoryInMemory } from "../../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

let categoriesRepositoryInMemory : CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create a category", ()=>{
    beforeEach(()=>{
        categoriesRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    });

    it("Should be able to create a new Category", async ()=>{
        const category = {
            name: "Salgado",
        };
        
        await createCategoryUseCase.execute(category.name);

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

        expect(categoryCreated).toHaveProperty("id");
    })

    it("Should not be able to create a new category when category already exists", async ()=>{
        expect( async()=>{
            const category = {
                name: "Salgado",
            };
            
            await createCategoryUseCase.execute(category.name);
            await createCategoryUseCase.execute(category.name);
           
        }).rejects.toBeInstanceOf(AppError);
        
    })
});
