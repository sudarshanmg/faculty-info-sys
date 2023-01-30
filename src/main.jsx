import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomePage from './routes/WelcomePage';
import UserProfilePage from './routes/UserProfilePage';
import ErrorPage from './error-page';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/users/:aadhaar',
    element: <UserProfilePage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
