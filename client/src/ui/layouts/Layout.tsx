import React, { useState } from 'react';
import { Header } from '../header/Header';
import { Main } from '../main/Main';

interface Props {
    children: React.ReactNode,
}

const Layout: React.FC<Props> = ({ children }) => {
    const [viewMain, setViewMain] = useState(false);

    return (
        <div
            className='
                grid 
                grid-cols-8
                sm:grid-cols-12
            '
        >
            <Header onClick={() => setViewMain(!viewMain)} />

            <div
                className='col-span-8 sm:col-start-3 sm:col-span-12 grid  grid-cols-8 sm:grid-cols-12 mt-9'
            >

                {children}
            </div>
            {viewMain &&
                <Main />
            }
        </div>
    )
}

export { Layout }