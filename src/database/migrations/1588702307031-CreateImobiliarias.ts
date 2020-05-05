import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateImobiliarias1588702307031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'imobiliarias',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generete_v4()',
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                    },
                    {
                        name: 'contato',
                        type: 'varchar',
                    },
                    {
                        name: 'telefone',
                        type: 'varchar', //é possível colovar qtos n°s desejar com ddd
                    },
                    {
                        name: 'email',
                        type: 'varchar',
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imobiliarias');
    }

}
