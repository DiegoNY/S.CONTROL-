import express from 'express';
import { products } from './products.router';

function routerApi(app: any) {
    /**initializing router 🐱‍🐉*/
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', products);

}

export { routerApi }