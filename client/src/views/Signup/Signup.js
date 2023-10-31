import { useState } from "react";
import axios from 'axios'

import "./Signup.css";

export default function Signup(){
    const[name ,setName]=useState("");
    const[email,setEmail]=useState('');
    const[password ,setPassword]=useState('');
    const[mobile,setMobile]=useState("");
    const[address,setAddress]=useState("")
    


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
                }catch(e){
                    console.log("not working")
                }
    }
    return(
        <div>
           <form className=" form-container">
                    <h1 className="text"> Signup</h1>
                <div>
                    <label className="label-field"> Name</label><br/>
                    <input placeholder="name" 
                    value={name} 
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>

                <div>
                    <label className="label-field"> Email</label><br/>
                    <input type="text" placeholder="enter your email" 
                    value={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>
                <div>
                    <label className="label-field"> password</label><br/>
                    <input type="password" placeholder="enter your current-password" 
                    value={password} 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>
                <div>
                    <label className="label-field"> Mobile</label><br/>
                    <input type="number" placeholder="enter your mobile number" 
                    value={mobile} 
                    onChange={(e)=>{
                        setMobile(e.target.value)
                    }}
                    className="inputfields"
                    />
                </div>
                <div>
                    <label className="label-field"> Address</label><br/>
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
           </form>
        </div>
    )
}