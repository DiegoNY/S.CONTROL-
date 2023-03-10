import { faker } from '@faker-js/faker'
import { badImplementation, conflict, notFound } from '@hapi/boom';
import { Products } from '../db/models/products.model';
import { ProductsInterface } from '../interface/product.interface';
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

        try {
            const { category, sale_price, name, purchase_price, description, } = data;
            const product = new Products();

            product.category = category;
            product.sale_price = sale_price;
            product.name = name;
            product.purchase_price = purchase_price;
            product.description = description;

            await product.save();
            return product;

        } catch (error) {

            throw badImplementation('Error al agregar a la base de datos  [SERVICE PRODUCTS]', error);
        }


    }

    async find() {
        try {

            const rta = await Products.find({
                relations: {
                    category: true
                }
            });
            return rta;
        } catch (error) {
            throw badImplementation('Error al mostrar productos [SERVICE PRODUCTS]', error)
        }
    }

    async findOne(id: number) {

        const product = await Products.findOne({
            where: {
                id: id
            }
        })

        if (!product) {
            throw notFound("product not found");
        }

        if (product.is_active == false) {
            throw conflict("product is inactive")
        }
        return product;



    }

    async update(id: number, changes: ProductsInterface) {

        const product = await Products.find({
            where: {
                id: id
            }
        })

        if (!product) {
            throw notFound("product not found");
        }

        await Products.update({ id: id }, changes);

        return { ...product, ...changes };
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