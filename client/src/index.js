
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Login from './views/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Order from './views/Order/Order';

const router =createBrowserRouter([
    {
       path:"/",
       element: <Home/>
    },
   {
    path:'/signup',
    element:<Signup/>
   },
   {
      path:'/login',
      element:<Login/>
   },
   {
      path:'/order',
      element:<Order/>
   }
    
    ])
     
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <>
          <RouterProvider router={router} />
       </>)
    