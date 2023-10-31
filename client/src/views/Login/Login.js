import { useState } from "react";
import "./Login.css";
import axios from "axios";


export default function Login(){
    const[email ,setEmail]=useState("");
    const[password ,setPassword]=useState("");

    const Login =async()=>{
       alert("hi juned")
    }
    return(
        <div>
            <form className="login-container">
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

                <button type="button" onClick={Login} className="btn"> Login</button>
            </form>
        </div>
    )
}
