import React from 'react';

interface Props {
    onClick?: any
}

const Header: React.FC<Props> = React.memo(({ onClick }) => {

    return (
        <div
            className='col-span-8 sm:col-span-12 flex justify-between  h-11 border-b border-b-slate-200 fixed w-full bg-white'
        >
            <div
                className='my-auto mx-3  flex  w-1/2'
            >
                <div
                    className='cursor-pointer rounded-lg p-0.5 sm:hidden hover:border-purple-300'
                    onClick={() => onClick()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-700 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className='p-1.5 ml-2'>
                    20:54:06
                </div>
            </div>
            <div className='flex mr-1'>
                <div
                    className='p-1 absolute z-30  w-1 h-1 mt-1.5 ml-3.5 text-xs text-white  bg-red-500 rounded-2xl'
                >
                </div>
                <div className='py-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 notification">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>

                </div>
                <div
                    className='py-1 px-1  rounded-2xl  tracking-tighter text-slate-600 cursor-pointer '
                >
                    <div className=' rounded-2xl p-1 bg-green-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
})

export { Header }