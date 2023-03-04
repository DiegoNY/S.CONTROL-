import React, { useState } from 'react';
import { CardHome } from '../../ui/cards/CardHome';
import { GraphicsLine } from '../../ui/graphics/GraphicsLine';
import { Layout } from '../../ui/layouts/Layout';
import { PedidosRegistrados } from './PedidosRegistrados';
import { ProductosMasVendidos } from './ProductosMasVendidos';


const Home = () => {

    const cardHome = [
        {
            cantidad: 50,
            informacion: "Ventas realizadas",
            img: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 mt-2 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
            )
        },
        {
            cantidad: 50,
            informacion: "Producto registrado",
            color: "bg-blue-600",
            img: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 mt-2 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>

            )
        },
        {
            cantidad: 20,
            informacion: "Clientes registrados",
            color: "bg-green-600",
            img: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 mt-2 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>

            )
        }
    ];

    return (
        <>
            <Layout
            >
                <div
                    className='col-span-8 sm:col-span-12 grid grid-cols-12  mb-auto mt-2'
                >
                    {cardHome.map(value => {

                        return (
                            <CardHome
                                color={value.color}
                                data={{
                                    cantidad: value.cantidad,
                                    informacion: value.informacion
                                }}
                            >
                                {value.img}
                            </CardHome>
                        )
                    })}
                </div>
                <div
                    className='col-span-8 sm:col-span-12 p-2'
                >
                    <div
                        className='border rounded-lg h-50 p-2'
                    >

                        <h1 className='text-xs font-black text-slate-700'>Ventas diarias</h1>
                        <GraphicsLine
                            data={
                                [
                                    {
                                        name: 'Page A',
                                        uv: 4000,
                                        pv: 2400,
                                        amt: 2400,
                                    },
                                    {
                                        name: 'Page B',
                                        uv: 3000,
                                        pv: 1398,
                                        amt: 2210,
                                    },
                                    {
                                        name: 'Page C',
                                        uv: 2000,
                                        pv: 9800,
                                        amt: 2290,
                                    },
                                    {
                                        name: 'Page D',
                                        uv: 2780,
                                        pv: 3908,
                                        amt: 2000,
                                    },
                                ]
                            }
                        />
                    </div>
                </div>
                <div
                    className='col-span-8 sm:col-span-12 p-2 grid grid-cols-8 gap-2'
                >
                    <ProductosMasVendidos
                    />
                    <PedidosRegistrados
                    />
                </div>
            </Layout>

        </>
    )
}

export { Home }