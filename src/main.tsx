import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

import AppContextProvider from './context/AppContextProvider.tsx';
import HomePage from './routes/HomePage.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContextProvider />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/results',
        element: <h2>Results</h2>,
      },
    ],
  },
  {
    path: '/*',
    loader: () => redirect('/'),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
