import React from 'react';

const Login = () => {

    return (
        <div className='grid grid-cols-12 '>

            <div
                className='col-span-12 mx-auto my-auto flex flex-col mt-44'
            >
                <h1>Usuario</h1>
                <input className='border border-slate-900 rounded-lg p-1' />
                <h1 className='mt-2'>Contraseña</h1>
                <input className='border rounded-lg p-1 border-slate-900' type='password' />
                <button className='border bg-slate-900 text-white rounded-lg p-2 mt-2' >
                    Ingresar
                </button>
            </div>

        </div>
    )
}

export { Login }