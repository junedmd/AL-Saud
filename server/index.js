import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js';
import useparams from 'express';
import Product from './models/product.js';
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

// product add karne
app.post('/products',async(req,res)=>{
    
    try{
    const{name,description,price,image,brand,category}=req.body;

    const newProduct = new Product({
        name:name,
        description:description,
        price:price,
        image:image,
        brand:brand,
        category:category
    });

    const savedProduct= await newProduct.save();

    res.send({
        success:true,
        data:savedProduct,
        message:"product aaded successfully"
    })
}catch(e){
    res.send({
        success:false,
        message:e.message
    })
}


})
// product fetch
app.get('/products',async(req,res)=>{

    try{
     const totalProduct = await Product.find();

    res.send({
        success:true,
        data:totalProduct,
        message:"total data is fetched"
    })
    }catch(e){
        res.send({
            success:true,
            message:e.message
        })
    }
    

})

app.get('/product/:id',async(req,res)=>{
    try{

        const {id}=req.params;
        const response = await Product.findOne({_id : id});
    
        res.send({
            success:true,
            data:response,
            message:`data is found by ${id}`
        })
    }catch(e){
        res.send({
            success:false,
            message:e.message
        })
    }
});

app.put('/products/:id',async(req,res)=>{
    try{

        const{id}=req.params
        const{name ,description,price,image,brand,category}=req.body;
    
        await Product.updateOne({_id:id},{$set:{
            name:name,
            description:description,
            price:price,
            image:image,
            brand:brand,
            category:category
        }});
    
        const updateFind = await Product.findOne({_id:id});
    
        res.send({
            success:true,
            data:updateFind,
            message:"data is updated"
        })
    }catch(e){
        res.send({
            success:true,
            message:e.message
        })
    }
    
});

// search query
app.get('/products/search',async(req,res)=>{
    try{

        const{q}=req.query;
    
        const findProducts = await Product.find({name: {$regex:q ,$options:"i"}});
    
        res.send({
            success:true,
            data:findProducts,
            message:"products is fetched "
        })
    }catch(e){
        res.send({
            success:false,
            message:e.message
        })
    }
})
app.listen(PORT,()=>{
    console.log(" server is running on port 5000")
}) 
