import { DataSource } from "typeorm";

import { config } from '../config/config';
import { Category } from "../db/models/category.model";
import { Products } from "../db/models/products.model";


const dataSource = new DataSource({
    type: "postgres",
    host: `${config.dbHost}`,
    username: `${config.dbUser}`,
    password: `${config.dbPassword}`,
    database: `${config.dbName}`,
    entities: [Products, Category],
    migrations: ["../db/migrations/*ts"],
    migrationsTableName: "custom_migration_table",
    synchronize: true,
    migrationsRun: true,
    logging: true
});

export { dataSource }