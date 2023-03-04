import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import { AddProduct } from './components/products/AddProducts';
import { PageError } from './components/error/PageError';
import { ProductList } from './components/products/ProductsList';
import { Home } from './components/home/Home';
import { Login } from './components/Login';
import { Venta } from './components/venta/Venta';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <PageError />
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: 'products',
        element: <ProductList />,
    },
    {
        path: 'products/add',
        element: <AddProduct />
    },
    {
        path: 'venta',
        element: <Venta />
    }

]);

export { router }