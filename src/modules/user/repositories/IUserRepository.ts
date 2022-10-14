import { User } from "../model/user";

interface UserDTO{
    name: string,
    password: string;
}

interface UserUpdateNameDTO{
    name: string;
    actualName: string;
}

interface IUserReposioty{
    create({name, password}: UserDTO): void;
    getUsers(): any;
    getUserByName(name:string): User;
    updateName({name, actualName}: UserUpdateNameDTO): void
    getUserByName(name:string): void;

}

export { IUserReposioty, UserUpdateNameDTO, UserDTO }