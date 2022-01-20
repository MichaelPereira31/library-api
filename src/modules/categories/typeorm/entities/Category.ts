import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Book } from "../../../book/typeorm/entities/Book";

@Entity('category')
class Category{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(type => Book, category => Category)
    book: Book[]

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