import { getRepository, Repository } from "typeorm";
import { User } from "../../model/user";
import { IPostgreSQLDBRepository } from "../IPostgreSQLDBRepository";
import {  UserDTO, UserUpdateNameDTO } from "../IUserRepository";

//singleton


class UsersRepository implements IPostgreSQLDBRepository{
    private repository: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }


    async create({name, password}: UserDTO){
        const user = this.repository.create({
            name,
            password
        });

        await this.repository.save(user);

    }

    async getUsers():Promise<User[]>{
        const all = await this.repository.find()

        return all
    }

    async findById(id: string): Promise<User>{
        const user = await this.repository.findOne(id) as User;
        
        return user;
    }

    async findByName(name: string): Promise<User>{
        const user = await this.repository.findOne({name}) as User;
        
        return user;
    }

    async updateName({name, actualName}: UserUpdateNameDTO){

    }

    async deleteUser(user:User){
        await this.repository.delete(user);
    }

}

export  { UsersRepository };