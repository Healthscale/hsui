import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Abha from './Abha';
// import Chat from './Chat';
import DoctorMain from './DoctorMain';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  // {
  //   path: "/abha",
  //   element: <div><Abha/></div>,
  // },
  // {
  //   path: "/chat",
  //   element: <div><Chat/></div>,
  // },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/staff",
    element: <div><DoctorMain/></div>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
  
