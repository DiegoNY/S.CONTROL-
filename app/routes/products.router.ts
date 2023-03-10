import express from 'express';
/**Service 🐍 */

import { ProductsService } from '../service/product.service';
const service = new ProductsService();

/**END Service */

/**Schema */
import { validatorHandler } from '../middlewares/validator.handler';
import { createProductSchema, getProductSchema } from '../schema/product.schema';
/**End Schema */

/**initializing router 🐱‍🐉*/
const router = express.Router();

/**product routes 📦*/
router.get('/', async (req, res) => {
    const products = await service.find();
    res.send(products);
})

router.get('/:_id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {

        try {
            const { _id } = req.params;
            const product = await service.findOne(Number(_id));
            res.json(product)
        } catch (error) {
            next(error);
        }

    })

router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        try {

            const body = req.body;
            const newProduct = await service.create(body);

            res.json({
                message: "created",
                data: newProduct,
            });
        } catch (error) {
            next(error)
        }
    })

router.patch('/:_id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { _id } = req.params;
            const body = req.body;
            const newProduct = await service.update(Number(_id), body);

            res.json(newProduct)
        } catch (error) {
            next(error)
        }
    })


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);

    res.json(rta);
})
export { router as products } 