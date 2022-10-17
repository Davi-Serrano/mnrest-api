import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterFoodImage1666042856118 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("specifications",
            new TableColumn({
                name: "image_food",
                type: "varchar",
                isNullable: true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("specifications","image_food")
    }

}
