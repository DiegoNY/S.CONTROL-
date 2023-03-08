import { faker } from '@faker-js/faker'
import { badImplementation, conflict, notFound } from '@hapi/boom';
import { Category } from '../db/models/category.model';

class CategoryService {

    categorys: any;
    pool: any;

    constructor() {
        this.categorys = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {

            this.categorys.push({
                _id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                isInactive: faker.datatype.boolean()
            });
        }
    }

    async create(data: any) {

        try {
            const { name, description } = data;
            const category = new Category();

            category.name = name;
            category.description = description;

            await category.save();
            return category;

        } catch (error) {

            throw badImplementation('Error al agregar a la base de datos', error);
        }


    }

    async find() {
        try {

            const rta = await Category.find();
            return rta;
        } catch (error) {
            throw badImplementation('Error al mostrar categorias', error);
        }
    }

    async findOne(id: number) {

        const [category] = await Category.findBy({ id: id })

        if (!category) {
            throw notFound("category not found");
        }

        if (category.is_active) {
            throw conflict("category is inactive")
        }

        return id;
    }

    async update(id: string, changes: any) {

        // const index = this.categorys.find((item: any) => item._id === id)
        // if (index === -1) {
        //     throw notFound("product not found");
        // }

        // const product = this.categorys[index];
        // this.categorys[index] = {
        //     ...product,
        //     ...changes
        // };

        return changes;
    }

    async delete(id: string) {
        // const index = this.categorys.find((item: any) => item._id === id);
        // if (index === -1) {
        //     throw new Error('product not found')
        // }
        // this.categorys.splice(index, 1);
        return { id }

    }
}

export { CategoryService }