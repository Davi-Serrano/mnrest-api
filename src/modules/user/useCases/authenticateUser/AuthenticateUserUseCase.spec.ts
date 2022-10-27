import { AppError } from "../../../../erros/appError";
import { DayJsProvider } from "../../../../shared/DateProvider/DayJsDateProvider";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokenInMemory } from "../../repositories/in-memory/UsersTokenRepositoryInMemory";
import { UserDTO } from "../../repositories/IUserRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticaceUserUseCase } from "./AuthenticaceUserUseCase";

let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticaceUserUseCase;
let usersTokenInMemory : UsersTokenInMemory;
let usersRepositoryInMemory : UsersRepositoryInMemory;
let dateProvider : DayJsProvider;


describe("Authenticate User", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        usersTokenInMemory = new UsersTokenInMemory();
        dateProvider = new DayJsProvider();
        authenticateUserUseCase = new AuthenticaceUserUseCase(
            usersRepositoryInMemory, 
            usersTokenInMemory, 
            dateProvider
        );

        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

        it("should be able to authentication a User", async ()=>{
            const user = {
                name: "User is a teste",
                password: "Is_a_test",
            };
            
            await createUserUseCase.execute(user);

            const result = await authenticateUserUseCase.execute({
                name: user.name,
                password: user.password
            })

            expect(result).toHaveProperty("token");
        })

        it("should not be able to authentication a none existent user", async ()=>{
            expect(async ()=> {
                await authenticateUserUseCase.execute({
                    name: "false",
                    password: "just_tests"
                });
            }).rejects.toBeInstanceOf(AppError);
        });

        it("should not be able to authentication if with a invalid password", async ()=>{
            expect(async ()=> {
                const user: UserDTO = {
                    name: "just_a_test",
                    password: "password"
                };

                await createUserUseCase.execute(user);

                await authenticateUserUseCase.execute({
                    name: "just_a_test",
                    password: "outher_password"
                });
            }).rejects.toBeInstanceOf(AppError);
        });
});