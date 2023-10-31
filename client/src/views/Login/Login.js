import { useState ,useEffect} from "react";
import "./Login.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom"; 
export default function Login(){
    const[email ,setEmail]=useState("");
    const[password ,setPassword]=useState("");


    useEffect(()=>{
        const store = JSON.parse(localStorage.getItem("user" || "{}"));
        if(store?.name){
            alert(" you already login");
            window.location.href="/"
        }
    },[])
    const Login =async()=>{
      const response = await axios.post('/login' ,{
        email:email,
        password:password
      });
        if(response?.data?.success){
            alert(response?.data?.message)
            localStorage.setItem("user",JSON.stringify(response?.data?.data));
            window.location.href="/"

            setEmail("")
            setPassword("")
        }else{
            alert(response?.data?.message) 
        }
      console.log(response)
    };


   
    return(
        <div>
                <Navbar/>
            <form className="login-container">
                <h1 className="text-center"> Login </h1>
            <div>
                    {/* <label className="label-field"> Email</label><br/> */}
                    <input type="text" placeholder="enter your email" 
                    value={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>
                <div>
                    {/* <label className="label-field"> password</label><br/> */}
                    <input type="password" placeholder="enter your current-password" 
                    value={password} 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>

                <button type="button" onClick={Login} className="btn"> Login</button>

                <p> <Link to="/signup" className="sign-linka"> Create a new account !</Link></p>
            </form>
        </div>
    )
}
