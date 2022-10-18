import { AppError } from "../../../../erros/appError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory : UsersRepositoryInMemory;

describe("Create a User", ()=>{
    beforeEach(()=>{
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("Should be able to create a new Category", async ()=>{
        const category = {
            name: "Salgado",
        };
        
        await createUserUseCase.execute(category);

        const categoryCreated = await usersRepositoryInMemory.findByName(category.name);

        expect(categoryCreated).toHaveProperty("id");
    })

    it("Should not be able to create a new category when category already exists", async ()=>{
        expect( async()=>{
            const category = {
                name: "Salgado",
            };
            
            await createUserUseCase.execute(category);
            await createUserUseCase.execute(category);
           
        }).rejects.toBeInstanceOf(AppError);
        
    })
});
