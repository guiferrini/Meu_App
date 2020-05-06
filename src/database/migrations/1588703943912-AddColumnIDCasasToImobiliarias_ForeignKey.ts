import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export default class AddColumnIDCasasToImobiliariasForeignKey1588703943912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'imobiliarias',
            new TableColumn({
                name: 'nome_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'imobiliarias',
            new TableForeignKey({
                columnNames: ['nome_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'casas',
                name: 'conexao',
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('imobiliarias', 'conexao');
        await queryRunner.dropColumn('imobiliarias', 'nome_id');
    }

}
