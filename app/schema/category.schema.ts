import Joi from 'joi';

const id = Joi.number().id();
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(3).max(400);


const createCategorySchema = Joi.object({
    name: name.required(),
    description: description.required(),
})

const getCategorySchema = Joi.object({
    id: id.required(),
})

export { createCategorySchema, getCategorySchema }