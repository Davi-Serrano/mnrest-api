import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Delete a User", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    
    });

    it("Should be able to list all users", async ()=>{

        const user = {
            name: "jonhatan Doe",
            password: "Is_a_test",
        };

        const user2 = {
            name: "jonh Doe",
            password: "Is_a_test",
        };

        await createUserUseCase.execute(user)
        await createUserUseCase.execute(user2)

        const userCreated = await usersRepositoryInMemory.getUsers();
       
        expect(userCreated).toHaveLength(2);
    })

  
});