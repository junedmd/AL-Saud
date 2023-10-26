import express from 'express';
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app =express()
app.use(express.json());

const PORT=process.env.PORT || 5000;

const connectMongoDB=async()=>{try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if(conn){
        console.log("api is working")
    }
    }catch(e){
    console.log(e)
}
  
};
connectMongoDB();

const userSchema = new Schema({

    name:{
        type:String,
        default:" _" 
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        unique:true,
        required:true,
    },
    address:{
        type:String
    },
    
});

const User = model('User',userSchema);


app.post('/signup' , async(req,res)=>{
    try{

    const{name,email,address,password,mobile}=req.body;
    const newUser= new User({
        name:name,
        email:email,
        password:password,
        mobile:mobile,
        address:address
    });

    const savedUser = await newUser.save();

    res.send({
        success:true,
        data:savedUser,
        message:"signup successfully !!!"
    })
}catch(e){
    res.send({
        success:false,
        message:e.message
    })
}

});

app.post('/login' ,async(req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email||!password){
            return res.send({
                success:false,
                message:"please fill all section"
            })
        }
        const response =await User.findOne({email:email,password:password});
    
       if(response){
        res.send(
            {
                success:true,
                data:response,
                message:"login successfuly!!!"
            }
        )
       }else{
        res.send({
            success:false,
            message:"please correct email and password"
        })
       }
    }catch(e){
        res.send({
            success:false,
            message:e.message
        })
    }
   
})

app.get('/user',async(req,res)=>{

        try{
            const loadData = await User.find();

            res.send({
                success:true,
                data:loadData,
                message:"successfully fetch all data"
            })

        }catch(e){
            res.send(
                {
                   success:false,
                   message:e.message 
                }
            )
        }

})


app.listen(PORT,()=>{
    console.log(" server is running on port 5000")
}) 
