import "reflect-metadata"
import { config } from "./config/config";
import { dataSource } from "./libs/typeorm";
import { app } from './server';

dataSource
    .initialize()
    .then(() => {
        console.log(`Orm accediendo a la base de datos Postgres en el puerto ${config.dbHost} 🐎`)
    })
    .catch((err) => {
        console.error("Error en la inicializacion del Orm Typeorm Debuguear 🦧", err)
    })

app.listen(3000, () => {
    console.log('Server escuchando en http://localhost:3000')
})
