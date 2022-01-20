import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity('user')
class User{
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column({unique:true})
    contact:string

    @Column()
    password:string;

    @Column({default: false})
    admin:boolean

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
export {User}