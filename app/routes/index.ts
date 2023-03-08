import express from 'express';
import { category } from './category.router';
import { products } from './products.router';

function routerApi(app: any) {
    /**initializing router 🐱‍🐉*/
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', products);
    router.use('/categorys', category);

}

export { routerApi }