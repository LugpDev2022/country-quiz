import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';

import AppContextProvider from './context/AppContextProvider.tsx';
import HomePage from './routes/HomePage.tsx';

import './index.css';
import ResultsPage from './routes/ResultsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppContextProvider>
        <Outlet />
      </AppContextProvider>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/results',
        element: <ResultsPage />,
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
