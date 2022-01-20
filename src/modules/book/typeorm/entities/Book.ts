import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Author } from "../../../author/typeorm/entities/Author";
import { Category } from "../../../categories/typeorm/entities/Category";
import {v4 as uuid} from 'uuid'

@Entity('book')
class Book{
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    pages:number;

    @Column({default:1})
    quantity:number;

    @Column()
    available:number;


    @JoinColumn()
    @ManyToOne(type=>Category, book => Book)
    category:Category[];

    @ManyToOne(type=>Author,book => Book)
    @JoinColumn()
    author:Author[];
    
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
export {Book}