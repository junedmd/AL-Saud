import React, { useEffect, useState } from 'react'
import "./Order.css"
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
export default function Order() {

  const [orders, setOrders] = useState([])

  const localuser = JSON.parse(localStorage.getItem('user'));
  console.log(localuser._id);
  const id = localuser._id;
  console.log(`junedd is ${id}`)
  const loadOrder = async () => {
    try {
      if (!localuser?._id) {
        return;
      }
      const response = await axios.get(`orders/user/${id}`);
      setOrders(response?.data?.data)
      console.log(response?.data?.data)
      console.log(orders)

    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    loadOrder()
  }, [])
  return (
    <div>
      <Navbar />
      
      <h1 className='text-center my-oder'>My Orders</h1>

      <div className='main-box'>
        {
          orders?.map((order, index) => {
            const { user, product, shipingAddress, quantity, deliveryCharges, status ,image } = order;
            return (
              <div className='my-roder' key={index}>
                <img src={product.image} className='img-prod'/>
                <h1>{product.name}</h1>
                <p>{user.name}</p>
                <p>{shipingAddress}</p>
                <p>Quantity:{quantity} </p>
                <p>Delivery Charges: ₹{deliveryCharges}</p>
                <span className='status'>states:{status}</span>
              </div>
            );
          })
        }

      </div>

    </div>
  )
}
