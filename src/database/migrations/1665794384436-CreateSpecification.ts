import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpecification1665794384436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specifications",
                columns : [
                  {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                  },
                  {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "category_id",
                    type: "uuid",
                    isNullable: true
                },
                ],
                foreignKeys: [
                    {
                        name: "FKCategoryFoodSpecification",
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                        columnNames: ["category_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            }) 
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("specifications")
    }

}
