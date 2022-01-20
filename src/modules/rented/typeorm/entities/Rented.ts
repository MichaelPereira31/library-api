import { type } from "os";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { Book } from "../../../book/typeorm/entities/Book";
import { User } from "../../../user/typeorm/entities/User";
@Entity('rented')
class Rented{

    @PrimaryColumn('uuid')
    id:string

    @Column()
    due_date: Date

    @ManyToOne(type => User, rented => Rented)
    @JoinColumn()
    librarian_id: User
    
    @ManyToOne(type => User, rented => Rented)
    @JoinColumn()
    user_id: User
    
    @ManyToOne(type => Book, rented => Rented)
    @JoinColumn()
    book_id: Book

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
export {Rented}