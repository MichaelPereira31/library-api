import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity('category')
class Category{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
export {Category}