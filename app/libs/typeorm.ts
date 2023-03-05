import { DataSource } from "typeorm";

import { config } from '../config/config';


const dataSource = new DataSource({
    type: "postgres",
    host: `${config.dbHost}`,
    username: `${config.dbUser}`,
    password: `${config.dbPassword}`,
    database: `${config.dbName}`,
    entities: ["../db/models/*.ts"],
    synchronize:true,
    logging: true
});

dataSource
    .initialize()
    .then(() => {
        console.log(`Orm accediendo a la base de datos Postgres en el puerto ${config.dbHost} 🐎`)
    })
    .catch((err) => {
        console.error("Error en la inicializacion del Orm Typeorm Debuguear 🦧", err)
    })

export { dataSource }