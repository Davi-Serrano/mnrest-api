import {Column, Entity, PrimaryColumn} from "typeorm"
import { v4 as uuidv4 } from "uuid"

@Entity("categories")
class CategoryFood {
    
    @PrimaryColumn()
    id?: string;

    @Column()
    name!: string;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export { CategoryFood }
