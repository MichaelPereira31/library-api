import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity('author')
class Author{
    @PrimaryColumn()
    id:string;

    @Column()
    name_first:string

    @Column()
    surname:string

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
export {Author}