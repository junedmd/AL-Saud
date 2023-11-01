import react, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./Navbar.css";
import Imglogo from "./image/logo4.png"
export default function Navbar(){
    const [user ,setUser]=useState({});

    useEffect(()=>{
        const store = JSON.parse(localStorage.getItem("user" || "{}"));
        setUser(store)
        
        console.log(user.name)
    },[])
    return(
        <div className="nav-links">
            <div>
                <span className="logo"> <Link to="/" className="Links-q"><img src={Imglogo} className="img-log"/>
                Al-Saud </Link></span>
            </div>

            <div className=" sep-link">
            <div><Link to="/login" className="Links-q" >login</Link> </div> 
            <div><Link to="/signup" className="Links-q">Signup</Link> </div>
            <div><Link to="/order" className="Links-q">Orders</Link> </div>
            </div>
            <div>
               

               {
                user?.name ? (<span onClick={()=>{
                    localStorage.removeItem("user");
                    window.location.href ="/"
                }}>  {user?.name}  logut</span>) : null
               }
            </div>

        </div>
    )
}

