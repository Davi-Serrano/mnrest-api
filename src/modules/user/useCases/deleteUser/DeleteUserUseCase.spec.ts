import { AppError } from "../../../../erros/appError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "./deleteUserUseCase";

let createUserUseCase: CreateUserUseCase;
let deleteUserUseCase: DeleteUserUseCase;
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

        const userDeleted = await usersRepositoryInMemory.findByName(user.name);

        await usersRepositoryInMemory.deleteUser(userDeleted);

        expect(user).not.toHaveProperty("id");
    })

  
});