import express from 'express';
/**Service 🐍 */
import { CategoryService } from '../service/category.service';
const service = new CategoryService();

/**END Service */

/**Schema */
import { validatorHandler } from '../middlewares/validator.handler';
import { createCategorySchema, getCategorySchema } from '../schema/category.schema';
/**End Schema */

/**initializing router 🐱‍🐉*/
const router = express.Router();

/**product routes 📦*/
router.get('/', async (req, res) => {
    const products = await service.find();
    res.send(products);
})

router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {

        try {
            const { id } = req.params;
            const category = await service.findOne(Number(id));
            res.json(category)
        } catch (error) {
            next(error);
        }

    })

router.post('/',
    validatorHandler(createCategorySchema, 'body'),
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

router.patch('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res) => {
        const { id } = req.params;
        const body = req.body;
        const newCategory = await service.update(id, body);

        res.json(newCategory)
    })


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);

    res.json(rta);
})
export { router as category } 