import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateCasas1588703032351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'casas',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'endereço',
                        type: 'varchar',
                    },
                    {
                        name: 'inquilino',
                        type: 'varchar',
                    },
                    {
                        name: 'inicio_e_fim',
                        type: 'varchar',
                    },
                    {
                        name: 'valor',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('casas');
    }

}
