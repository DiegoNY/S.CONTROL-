import React from 'react';

const PedidosRegistrados = () => {

    return (
        <div
            className='border rounded-lg h-full p-2 col-span-4 '
        >

            <h1 className='text-xs font-black text-slate-700 mb-1'>Pedidos registrados</h1>
            <div
                className='bg-sky-200 rounded-lg p-2 h-40  max-h-40 overflow-scroll '
            >
                <div
                    className='bg-white p-1 text-xs rounded-lg flex flex-col'
                >
                    <div
                        className='flex flex-col px-1'
                    >
                        <h1 className='mb-1 font-black'>Cliente</h1>
                        <p>dipisicing elit. Non, maxime ratione incidunt fugiat molestias tempora ma</p>
                    </div>
                    <div className='flex justify-end p-1 text-slate-500 cursor-pointer'>Informacion del cliente 🏇</div>
                </div>
                <div
                    className='bg-white p-1 text-xs rounded-lg mt-1'
                >
                    Cliente : 2 sortijas de 20 gramos
                </div>
                <div
                    className='bg-white mt-1 p-1 text-xs rounded-lg flex flex-col'
                >
                    <div
                        className='flex flex-col px-1'
                    >
                        <h1 className='mb-1 font-black'>Cliente</h1>
                        <p>dipisicing elit. Non, maxime ratione incidunt fugiat molestias tempora ma</p>
                    </div>
                    <div className='flex justify-end p-1 text-slate-500 cursor-pointer'>Informacion del cliente 🏇</div>
                </div>
                

            </div>
        </div>
    )
}

export { PedidosRegistrados }