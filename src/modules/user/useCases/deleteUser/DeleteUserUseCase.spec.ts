import { AppError } from "../../../../erros/appError";
import { User } from "../../model/user";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "./deleteUserUseCase";

let createUserUseCase: CreateUserUseCase;
let deleteUserUseCase: DeleteUserUseCase;
let usersRepositoryInMemory : UsersRepositoryInMemory;

describe("Delete a User", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
        deleteUserUseCase = new DeleteUserUseCase(usersRepositoryInMemory);
    });

    it("Should be able to delete a User", async ()=>{
        const user = {
            name: "jonh Doe",
            password: "Is_a_test"
        };
        
        await createUserUseCase.execute({
            name: user.name,
            password: user.password
        });

        const userDeleted = await usersRepositoryInMemory.findByName(user.name);

        await deleteUserUseCase.execute(userDeleted);

        expect(user).not.toHaveProperty("id");
    })

    it("Should not be able to delete a User not exists", async ()=>{
        
        expect( async ()=>{
            const user = {
                name: "jonh Doe",
                password: "Is_a_test"
            };
    
            const user2 = {
                id: "uofjsabfas",
                name: "jonhatan Doe",
                password: "Is_a_test",
            } as User;
            
            await createUserUseCase.execute(user);
    
            const deleted = await deleteUserUseCase.execute(user2);

        }).rejects.toBeInstanceOf(AppError);
    })

  
});