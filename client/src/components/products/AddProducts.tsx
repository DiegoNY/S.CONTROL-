import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Layout } from '../../ui/layouts/Layout';


const AddProduct = () => {
    /**UI */
    const [categories, setCategories] = useState([
        { id: 1, name: "Aretes", view: false },
        { id: 2, name: "Polos", view: false },
        { id: 3, name: "Collares", view: false },
        { id: 4, name: "Pulseras", view: false },
        { id: 5, name: "Relojes", view: false },
        { id: 6, name: "Anillos", view: false },
    ]);

    const showCategory = (id: number) => {
        categories.map(category => {
            category.view = false;
            if (category.id === id) {
                category.view = true;
            }
        })
        return setCategories([...categories])
    }
    /**END UI */

    const [product, setProduct] = useState({});



    const HandleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }


    return (
        <Layout>
            <div className='col-span-8 sm:col-span-12 p-2 flex justify-between '>
                <div>
                    <h1 className='font-black tracking-tighter font-sans text-slate-800 text-3xl mt-2'>PRODUCTOS</h1>
                </div>
                <div className='flex mt-1'>

                </div>
            </div>
            <div className='col-span-8 sm:col-span-12 p-1  '>
                <div className='flex  p-2  '>
                    <form className='text-sm w-full' onSubmit={e => HandleSubmit(e)}>
                        <h1 className='text-xs text-slate-400' >Nombre</h1>
                        <input
                            name='nombre'
                            type='text'
                            className='w-full p-1 border-b border-gray-200 rounded-sm'
                            onChange={(e) => HandleChange(e)}
                        />
                        <h1 className='text-xs text-slate-400 mt-2' >Precio compra</h1>
                        <input
                            name='precio_compra'
                            type='text'
                            onChange={(e) => HandleChange(e)}
                            className='w-full p-1 border-b border-gray-200 rounded-sm'
                        />
                        <h1 className='text-xs text-slate-400 mt-2' >Precio venta</h1>
                        <input
                            name='precio_venta'
                            type='text'
                            className='w-full p-1 border-b border-gray-200 rounded-sm'
                            onChange={(e) => HandleChange(e)}
                        />
                        <br />
                        <h1 className='text-xs text-slate-400 mt-2' >Descripcion</h1>
                        <textarea
                            className='w-full p-1 border-b border-gray-200 rounded-sm outline-none '
                            rows={4}
                        >

                        </textarea>
                    </form>
                </div>
            </div>
            <div className='col-span-8 py-1 px-2 flex justify-between'>
                <h1 className='text-xs text-slate-400 mt-2' >Categorias</h1> <p className='text-xs mt-2 px-2 cursor-pointer'>Nueva Categoria</p>
            </div>
            <div className='col-span-8 grid grid-cols-3 p-4 gap-0.5 justify-between max-h-60 h-60 grid-rows-4'>
                {categories.map(category => {
                    return (
                        <div
                            className={`
                                p-2 bg-gradient-to-t 
                                rounded-lg text-sm flex items-center justify-center 
                                tracking-tight max-h-11 ${category.view && 'bg-fuchsia-100 text-red-500' || 'from-blue-50 via-blue-100 to-blue-100 text-slate-900 '}
                            `}
                            onClick={() => {
                                showCategory(category.id)
                                setProduct({ ...product, category: category })
                            }}
                        >
                            {category.name}
                        </div>
                    )
                })}
            </div>
            <div className=' h-full col-span-8 p-4 mt-auto '>
                <div
                    className='bg-indigo-600  text-white rounded-xl tracking-tight p-2 text-sm text-center '
                    onClick={() => console.log(product)}
                >
                    Agregar Nuevo Producto
                </div>
            </div>
        </Layout>
    )
}

export { AddProduct }