import React, { useState } from 'react';

type data = {
    cantidad: number,
    informacion: string,
}

interface CardHome {
    data?: data,
    color?: string,
    children?: React.ReactNode,
}


const CardHome: React.FC<CardHome> = ({ data, color, children }) => {


    return (

        <div
            className={`col-span-4 text-center ${color || 'bg-orange-500'} text-white mx-2 rounded-lg p-1 flex flex-col  items-center`}
        >
            <div>
                {children}
            </div>
            <p className='text-2xl font-black'>{data?.cantidad}</p>
            <h1 className='text-sm'>{data?.informacion}</h1>
        </div>

    )
}

export { CardHome }