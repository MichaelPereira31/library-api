import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBook1640697512155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'book',
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
                        name:'description',
                        type:'varchar'
                    },
                    {
                        name:'pages',
                        type:'integer'
                    },
                    {
                        name:'quantity',
                        type:'integer'
                    },
                    {
                        name:'available',
                        type:'integer'
                    },
                    {
                        name:'category',
                        type:'uuid'
                    },
                    {
                        name:'author',
                        type:'uuid'
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
                ],
                foreignKeys:[
                    {
                        name:'category',
                        referencedTableName:'category',
                        referencedColumnNames:['id'],
                        columnNames:['category'],
                        onDelete:'SET NULL',
                        onUpdate:'SET NULL'
                    },
                    {
                        name:'author',
                        referencedTableName:'author',
                        referencedColumnNames:['id'],
                        columnNames:['author'],
                        onDelete:'SET NULL',
                        onUpdate:'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('book')
    }

}
