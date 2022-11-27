import { FoodRepositoryInMemory } from "../../../repositories/in-memory/FoodRepositoryInMemory";
import { CreateFoodUseCase } from "../CreateFood/createFoodUseCase";
import { FindAllFoodsUseCase } from './findAllFoodsUseCase'



let foodRepositoryInMemory : FoodRepositoryInMemory;
let createFoodUseCase: CreateFoodUseCase;
let findAllFoodsUseCase: FindAllFoodsUseCase;

describe("Find All a food", ()=>{
    beforeEach(()=>{
        foodRepositoryInMemory = new FoodRepositoryInMemory();
        createFoodUseCase = new CreateFoodUseCase(foodRepositoryInMemory);
        findAllFoodsUseCase = new FindAllFoodsUseCase(foodRepositoryInMemory);
    });
    it("Should be able to list all foods", async ()=>{

        const food = {
            name: "coxinha",
            description: "outra comida delicioosa",
            category_id: "4b4f0232-ed78-4971-80fe-10688a0abd5c",
            price: "29.41"
        };

        const food2 = {
            name: "Esfiha",
            description: "uam outra comida delicioosa",
            category_id: "4b4f0232-ed78-4971-80fe-10688a0abd5c",
            price: "39.41"
        };

        await createFoodUseCase.execute(food)
        await createFoodUseCase.execute(food2)

        const allFoods = await findAllFoodsUseCase.execute();
       
        expect(allFoods).toHaveLength(2);
    })

  
});