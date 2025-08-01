import React from "react";
import ReactDom from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import './Style/Default.css';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Homepage from './Pages/Homepage.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Error404 from './Pages/Error404.jsx';

const router = createBrowserRouter([
{
  path: '/',
  element: <Homepage/>,
},
{
  path: '/login',
  element: <Login/>,
},
{
  path: 'register',
  element: <Register/>,
},
{
  path: '/dashboard',
  element: <Dashboard/>,
},
{
  path: '/homepage',
  element: <Homepage/>,
},
{
  path: '/error404',
  element: <Error404/>,
},
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
