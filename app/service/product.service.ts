import { faker } from '@faker-js/faker'
import { badImplementation, conflict, notFound } from '@hapi/boom';
import { Products } from '../db/models/products.model';

import { dataSource } from '../libs/typeorm';
class ProductsService {

    products: any;
    pool: any;

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {

            this.products.push({
                _id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                purchase_price: parseInt(faker.commerce.price(), 10),
                sale_price: parseInt(faker.commerce.price(), 10),
                description: faker.commerce.productDescription(),
                category: faker.commerce.productMaterial(),
                isInactive: faker.datatype.boolean()
            });
        }
    }

    async create(data: any) {

        const { category, sale_price, name, purchase_price, description, } = data
        const product = new Products();

        product.category = category;
        product.sale_price = sale_price;
        product.name = name;
        product.purchase_price = purchase_price;
        product.description = description;

        await product.save()
            .then(rta => {
                return rta;
            })
            .catch(err => {
                throw badImplementation(err)
            })



        const newProduct = {
            _id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        const query = 'SELECT * FROM user';
        const rta = await dataSource.query(query);

        return rta;

    }

    async findOne(id: string) {
        const product = this.products.find((item: any) => item._id === id);

        if (!product) {
            throw notFound("product not found");
        }

        if (product.isInactive) {
            throw conflict("product is inactive")
        }

        return product;
    }

    async update(id: string, changes: any) {

        const index = this.products.find((item: any) => item._id === id)
        if (index === -1) {
            throw notFound("product not found");
        }

        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };

        return this.products[index];
    }

    async delete(id: string) {
        const index = this.products.find((item: any) => item._id === id);
        if (index === -1) {
            throw new Error('product not found')
        }
        this.products.splice(index, 1);
        return { id }

    }
}

export { ProductsService }