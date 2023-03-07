import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { Products } from "../models/products.model"

export class ChangeProduct1678153147256 implements MigrationInterface {
    
    ProductsTable = new Table(Products);

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.ProductsTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.ProductsTable);
    }

}
