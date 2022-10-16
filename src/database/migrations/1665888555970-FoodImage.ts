import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class FoodImage1665888555970 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "foods_image",
                columns : [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "image_name",
                        type: "varchar",
                    },
                    {
                        name: "food_id",
                        type: "varchar",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKFoodImage",
                        referencedTableName: "specifications",
                        referencedColumnNames: ["id"],
                        columnNames: ["food_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })      
         )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("foods_image")
    }


}