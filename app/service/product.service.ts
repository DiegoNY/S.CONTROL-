import { faker } from '@faker-js/faker'
import { conflict, notFound } from '@hapi/boom';

import { pool } from '../libs/postgres';

class ProductsService {

    products: any;
    pool: any;

    constructor() {
        this.products = [];
        this.generate();
        this.pool = pool;
        this.pool.on("error", (err: any) => console.error(err))
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
        const newProduct = {
            _id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        const query = 'SELECT * FROM task';
        const rta = await this.pool?.query(query);
        return rta?.rows;

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