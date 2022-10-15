import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { CategoryFood } from "./category"
import { v4 as uuidv4 } from "uuid"

@Entity("foods")
class Food {
    @PrimaryColumn()
    id?: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @ManyToOne(()=> CategoryFood)
    @JoinColumn( {name: "category_id"})
    category!: CategoryFood;

    @Column()
    category_id!: string;

    @Column()
    price!: string;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
    
}

export { Food }