import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1664935504178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users",
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
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "admin",
                    type: "boolean",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                }
              ] 
            })
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
