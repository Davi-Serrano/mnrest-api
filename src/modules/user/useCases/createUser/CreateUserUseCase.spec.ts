import { AppError } from "../../../../erros/appError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory : UsersRepositoryInMemory;

describe("Create a User", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("sould be able to create a new User", async ()=>{
        const user = {
            name: "User is a teste",
            password: "Is_a_test",
        };
        
        await createUserUseCase.execute({
            name: user.name,
            password: user.password
        });

        const userCreated = await usersRepositoryInMemory.findByName(user.name);

        expect(userCreated).toHaveProperty("id");
    })

    it("sould not be able to create a new User when user already exists", async ()=>{
        expect( async()=>{
            const user = {
                name: "User is a teste",
                password: "Is_a_test",
            };
            
            await createUserUseCase.execute({
                name: user.name,
                password: user.password
            });
    
            await createUserUseCase.execute({
                name: user.name,
                password: user.password
            });
        }).rejects.toBeInstanceOf(AppError);
        
    })
});