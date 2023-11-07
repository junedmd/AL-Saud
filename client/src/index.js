
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Login from './views/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Order from './views/Order/Order';
import Buy from "./views/Buypage/Buy"

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
   },
   {
      path:'/buy/:id',
      element:<Buy/>
   }
    
    ])
     
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <>
          <RouterProvider router={router} />
       </>)
    