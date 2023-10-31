import { useState,useEffect } from "react";
import axios from 'axios'
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
export default function Signup(){
    const[name ,setName]=useState("");
    const[email,setEmail]=useState('');
    const[password ,setPassword]=useState('');
    const[mobile,setMobile]=useState("");
    const[address,setAddress]=useState("")
    

    useEffect(()=>{
        const store = JSON.parse(localStorage.getItem("user" || "{}"));
        if(store?.name){
            alert(" you already signup ");
            window.location.href="/"
        }
    },[]);

    const Signup = async()=>{
                try{

                    const response =  await axios.post('/signup',{
                        name:name,
                        email:email,
                        password:password,
                        mobile:mobile,
                        address:address,
                    });
            

                    
                    if(response?.data?.success){
                        alert(response?.data?.message)
                    }else{
                        alert(response?.data?.message)
                    }

                    setName("")
                    setEmail("")
                    setPassword("")
                    setAddress("")
                    setMobile("")
                }catch(e){
                    console.log("not working")
                }
    }
    return(
        <div>
            <Navbar/>
           <form className=" form-container">
                    <h1 className="text-center"> Sign up</h1>
                <div>
                    {/* <label className="label-field"> Name</label><br/> */}
                    <input placeholder="name" 
                    value={name} 
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>

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
                <div>
                    {/* <label className="label-field"> Mobile</label><br/> */}
                    <input type="number" placeholder="enter your mobile number" 
                    value={mobile} 
                    onChange={(e)=>{
                        setMobile(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>
                <div>
                    {/* <label className="label-field"> Address</label><br/> */}
                    <input
                    type="text"
                    placeholder="enetr your Addrress" 
                    value={address} 
                    onChange={(e)=>{
                        setAddress(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>

                <button
                type="button"
                 className="btn"
                 onClick={Signup}
                 
                 > Signup</button>

                 <p> <Link to="/login" className="sign-link"> already you have an account?</Link></p>
           </form>
        </div>
    )
}