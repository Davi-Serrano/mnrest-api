import { User } from "../../model/user";
import { IPostgreSQLDBRepository, UserDTO, UserUpdateNameDTO } from "../IPostgreSQLDBRepository";

class UsersRepositoryInMemory implements IPostgreSQLDBRepository{
    users: User[] = [];

    async create({ name, password }: UserDTO): Promise<void> {
        const user = new User();

        Object.assign(user,{
            name,
            password
        });

        this.users.push(user);
    }


    async getUsers(): Promise<User[]> {
       const all = this.users;
      
       return all;
    }

    async findById(id: string): Promise<User> {
        const user = this.users.find((user)=> user.id === id ) as User;

        return user;
    }

    async findByName(name: string): Promise<User> {
        const user = this.users.find((user)=> user.name === name ) as User;

        return user;
    }

    async deleteUser(user: User): Promise<void> {
        const userWillBeDelete= this.users.indexOf(user);

        this.users.splice(userWillBeDelete, 1);
    }

    updateName({ name, actualName }: UserUpdateNameDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export { UsersRepositoryInMemory }