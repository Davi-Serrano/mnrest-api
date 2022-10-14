import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { DeleteUserController } from "./deleteUserController";
import { DeleteUserUseCase } from "./deleteUserUseCase";

export default (): DeleteUserController=> {

const userRepository = new UsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(userRepository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

return deleteUserController 
};