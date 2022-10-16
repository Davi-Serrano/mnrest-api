import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"

@Entity("foods_image")
class ImageFood {
    @PrimaryColumn()
    id?: string;

    @Column()
    image_name!: string;

    @Column()
    food_id!: string;


    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
    
}

export { ImageFood }