import { User } from "../model/user";

interface UserDTO{
    name: string,
    password: string;
}

interface UserUpdateNameDTO{
    name: string;
    actualName: string;
}

interface IPostgreSQLDBRepository{
    create({name, password}: UserDTO): Promise<void>;
    getUsers(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByName(name: string): Promise<User>;
    deleteUser(user:User): Promise<void>;
}

export { IPostgreSQLDBRepository, UserUpdateNameDTO, UserDTO }