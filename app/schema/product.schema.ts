import Joi from 'joi';

const _id = Joi.string().uuid();
const name = Joi.string().min(3).max(50);
const purchase_price = Joi.number().min(1);
const sale_price = Joi.number().min(1);
const description = Joi.string().min(3).max(400);
const category = Joi.string();


const createProductSchema = Joi.object({
    name: name.required(),
    purchase_price: purchase_price.required(),
    sale_price: sale_price.required(),
    description: description.required(),
    category: category.required(),
})

const getProductSchema = Joi.object({
    _id: _id.required(),
})

export { createProductSchema, getProductSchema }