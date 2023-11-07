
import { Schema, model } from 'mongoose';
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
    
},{
    timestamps:true,
});

const User = model('user',userSchema);
export default User ;