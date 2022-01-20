import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Book } from "../../../book/typeorm/entities/Book";

@Entity('author')
class Author{
    @PrimaryColumn()
    id:string;

    @Column()
    name_first:string

    @Column()
    surname:string

    @OneToMany(type => Book, author => Author)
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
export {Author}