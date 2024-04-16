import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Control from './pages/Control';
import Logs from './pages/Logs';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },

      {
        path: '/dashboard',
        element: <Dashboard />,
      },

      {
        path: '/control',
        element: <Control />,
      },

      {
        path: '/logs',
        element: <Logs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
