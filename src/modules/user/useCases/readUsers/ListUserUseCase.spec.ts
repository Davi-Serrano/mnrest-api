import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ListUsersUseCase } from "./listUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let listUsersUseCase: ListUsersUseCase
;

describe("Delete a User", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
        listUsersUseCase = new ListUsersUseCase(usersRepositoryInMemory);
        
    
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

        const allUsers = await listUsersUseCase.execute();
       
        expect(allUsers).toHaveLength(2);
    })

  
});