import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { UpdateUserController } from "./updateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";

export default (): UpdateUserController=> {

const userReposiotry = new UsersRepository()

const updateUserUseCase = new UpdateUserUseCase(userReposiotry)

const updateUserController = new UpdateUserController(updateUserUseCase)

return updateUserController 
};