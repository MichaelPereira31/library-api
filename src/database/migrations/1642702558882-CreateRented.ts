import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateRented1642702558882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rented',
                columns: [
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true
                    },
                    {
                        name:'due_date',
                        type:'timestamp'
                    },
                    {
                        name:'librarian_id',
                        type:'uuid'
                    },
                    {
                        name:'user_id',
                        type:'uuid'
                    },
                    {
                        name:'book_id',
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
                        name:'librarian_id',
                        referencedTableName:'user',
                        referencedColumnNames:['id'],
                        columnNames:['librarian_id'],
                        onDelete:'SET NULL',
                        onUpdate:'SET NULL'
                    },
                    {
                        name:'user_id',
                        referencedTableName:'user',
                        referencedColumnNames:['id'],
                        columnNames:['user_id'],
                        onDelete:'SET NULL',
                        onUpdate:'SET NULL'
                    },
                    {
                        name:'book_id',
                        referencedTableName:'book',
                        referencedColumnNames:['id'],
                        columnNames:['book_id'],
                        onDelete:'SET NULL',
                        onUpdate:'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rented')
    }

}
