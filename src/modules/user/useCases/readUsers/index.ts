
import { UsersRepository } from "../../repositories/implemantations/userRepository";
import { ListUsersController } from "./listUserController";
import { ListUsersUseCase } from "./listUserUseCase";

export default (): ListUsersController=> {
    const userReposiotry = new UsersRepository()

    const listAllUsersUseCase = new ListUsersUseCase(userReposiotry)

    const listAllUsersController = new ListUsersController(listAllUsersUseCase);

return listAllUsersController 
};