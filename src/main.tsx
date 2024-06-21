import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout/Layout.tsx';
import Product from './pages/Product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          await new Promise<void>((res) => {
            setTimeout(() => {
              res();
            }, 2000);
          });
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        }
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
