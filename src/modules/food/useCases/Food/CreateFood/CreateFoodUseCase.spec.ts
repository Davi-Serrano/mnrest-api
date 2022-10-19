import { AppError } from "../../../../../erros/appError";
import { FoodRepositoryInMemory } from "../../../repositories/in-memory/FoodRepositoryInMemory";
import { CreateFoodUseCase } from "./createFoodUseCase";



let foodRepositoryInMemory : FoodRepositoryInMemory;
let createFoodUseCase: CreateFoodUseCase;

describe("Create a food", ()=>{
    beforeEach(()=>{
        foodRepositoryInMemory = new FoodRepositoryInMemory();
        createFoodUseCase = new CreateFoodUseCase(foodRepositoryInMemory);
    });

    it("Should be able to create a new food", async ()=>{
        const food = {
            name: "coxinha",
            description: "outra comida delicioosa",
            category_id: "4b4f0232-ed78-4971-80fe-10688a0abd5c",
            price: "29.41"
        };
        
        await createFoodUseCase.execute(food);

        const foodCreated = await foodRepositoryInMemory.findByName(food.name);

        expect(foodCreated).toHaveProperty("id");
    })

    it("Should not be able to create a new food when category already exists", async ()=>{
        expect( async()=>{
            const food = {
                name: "coxinha",
                description: "outra comida delicioosa",
                category_id: "4b4f0232-ed78-4971-80fe-10688a0abd5c",
                price: "29.41"
            };
            
            await createFoodUseCase.execute(food);
            await createFoodUseCase.execute(food);
           
        }).rejects.toBeInstanceOf(AppError);
        
    })
});
