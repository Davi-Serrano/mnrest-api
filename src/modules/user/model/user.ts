import {v4 as uuidv4} from "uuid"
import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

@Entity("users")
class User{
    @PrimaryColumn()
    id?: string;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @Column()
    admin!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    constructor(){

        if(!this.id){
            this.id = uuidv4();
            this.admin = true;

        }
    }

}

export { User }