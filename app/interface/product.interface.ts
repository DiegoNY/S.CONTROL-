interface ProductsInterface {
    [key: string | number | symbol]: any
    id: number
    name: string,
    purchase_price: number
    description: string
    sale_price: number
    category: any
    created_at: Date
    update_at: Date
    is_active: boolean
    [Symbol.iterator](): Iterator<ProductsInterface>

}


export { ProductsInterface }