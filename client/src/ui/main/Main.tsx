import React from 'react';
import { ItemsMenu } from './ItemsMenu';

interface Props {
    onClick?: React.ReactNode,
}


const Main: React.FC<Props> = React.memo(({ onClick }) => {

    const Items = [
        {
            text: "Inicio",
            route: "/home",
            icono:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                </svg>
        },
        {
            text: "Mantenimiento",
            icono:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            ,
            submenu: [
                {
                    text: "Productos",
                    route: "/products/add"
                },
                {
                    text: "text 2"
                },
            ]
        },
    ]

    return (
        <div
            className='fixed text-sm p-2 bg-white mt-11 w-48 h-full border-r text-slate-900 '
        >
            <div className='h-screen flex flex-col gap-1'>

                {Items.map((item, index) => {
                    return (
                        <ItemsMenu
                            key={index}
                            item={
                                {
                                    text: item.text,
                                    icono: item.icono,
                                    submenu: item.submenu,
                                    route: item.route
                                }
                            }
                        />
                    )
                })}

            </div>
        </div>
    )
})

export { Main }