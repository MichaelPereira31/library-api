import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1640690727306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'user',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true
                    },
                    {
                        name:'name',
                        type:'varchar'
                    },
                    {
                        name:'email',
                        type:'varchar',
                        isUnique:true
                    },
                    {
                        name:'contact',
                        type:'varchar',
                        isUnique:true
                    },
                    {
                        name:'password',
                        type:'varchar',
                    },
                    {
                        name:'admin',
                        type:'boolean'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
