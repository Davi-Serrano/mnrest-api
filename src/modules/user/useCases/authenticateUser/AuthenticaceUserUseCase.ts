import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../erros/appError";
import { IPostgreSQLDBRepository } from "../../repositories/IPostgreSQLDBRepository";


interface IRequest{
    name: string;
    password: string;
}

interface IResponse {
    user:{
        name: string,
    };
    token: string;
}

@injectable()
class AuthenticaceUserUseCase{
    constructor(
        @inject("UsersRepository")
        private userRepository: IPostgreSQLDBRepository
    ){}

    async execute({name, password}: IRequest): Promise<IResponse>{

        const user = await this.userRepository.findByName(name);

        if(!user){
            throw new AppError("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch){
            throw new AppError("Email or password incorrect");
        }


        const token = sign({}, "ee11cbb19052e40b07aac0ca060c23ee",{
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name
            }
        }

        return tokenReturn
    }
}


    export  { AuthenticaceUserUseCase }