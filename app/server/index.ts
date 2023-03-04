import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import { routerApi } from '../routes';
import { boomErrorHandler, errorHandler, logErrors } from '../middlewares/error.handler';
const path = require('path');

const app = express();


/**DOMINIOS */
const whitelist = ['http://localhost:5173', 'https://myapp.com']

const options = {
    origin: (origin: any, callback: any) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("no permitido"))
        }
    }
}

/**API */
app.use(cors(options));
app.use(morgan("dev"));
app.use(express.json());

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


/**END API */

/**PAGE */
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
})




export { app }
