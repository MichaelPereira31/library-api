import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1640606471750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'category',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                    },
                    {
                        name:'name',
                        type:'varchar',
                        isUnique:true
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
        await queryRunner.dropTable('category')
    }

}
