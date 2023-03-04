import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface submenu {
    text?: string,
    route?: string,
}

interface Object {
    text: string,
    route?: string,
    icono?: React.ReactNode,
    submenu?: submenu[] | undefined,
}

interface Item {
    item: Object,
    key: number
}

const ItemsMenu: React.FC<Item> = React.memo(({ item, key }) => {
    const [viewSubMenu, setViewSubMenu] = useState(false);
    const location = useLocation()
   
    return (
        <div key={key} >
            <Link to={`${item.route || ''}`}>
                <div
                    className={`flex justify-self-center gap-2 ml-1  p-1.5 rounded-2xl hover:bg-slate-100 tracking-tighter cursor-pointer ${location.pathname == item.route && 'bg-slate-200' || ''}`}
                    onClick={() => setViewSubMenu(!viewSubMenu)}
                >
                    {item.icono}
                    <h1>{item.text}</h1>
                </div>
            </Link>
            {viewSubMenu &&
                <div className='flex justify-center items-center flex-col mt-1 bg-slate-50 rounded-xl mx-2 cursor-pointer'>
                    {item.submenu?.map((submenu, index) => {
                        return (
                            <Link to={`${submenu.route || ''}`}>
                                <div
                                    className={`p-1 hover:bg-slate-200 w-40 mx-2 flex justify-center rounded-xl items-center ${location.pathname == submenu.route && 'bg-slate-200' || ''}`}
                                    
                                >
                                    {submenu.text}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            }


        </div>
    )
})

export { ItemsMenu }