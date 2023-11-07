import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
        user:{
            type:Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        product:{
            type:Schema.Types.ObjectId,
            ref:"product",
            required:true,
        },
        quantity:{
                type:Number,
                default:1,

        },
        shippingAddress:{
            type:String,
            required:true
        },
        deliveryCharges:{
            type:String,
            default:0,
        },
        status:{
            type:String,
            default:'pending'
        }
        
},{timestamps:true})

const Order =model('order',orderSchema);
export default Order;