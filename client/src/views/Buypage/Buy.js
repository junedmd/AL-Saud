import React, { useEffect, useState } from "react";
import "./Buy.css"
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Buy() {
    const { id } = useParams()

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState(" ");
    const [deliveryCharges, setDeliveryCharges] = useState(" ")


    const loadData = async () => {
        try {
            if (!id) {
                return;
            }
            const response = await axios.get(`/product/${id}`);
            setProduct(response?.data?.data);
            console.log(response?.data?.data)
        } catch (e) {
            alert(e.message)
        }
    };

    useEffect(() => {
        loadData();
    }, [])

    const increase = () => {
        setQuantity(quantity + 1)
    };

    const decrease = () => {
        if (quantity === 1) {
            return
        }
        setQuantity(quantity - 1)
    }

    const usernow = JSON.parse(localStorage.getItem("user") || "{}")

    const Order = async ()=>{
        const responce = await axios.post("/order",
        {
          user:usernow._id,
          product:id,
          quantity:quantity,
          deliveryCharges:deliveryCharges,
          shippingAddress:address,
        }
      );
      
      if (responce?.data?.success) {
        alert(responce?.data?.message)
        window.location.href = "/order";
      } else {
        alert(responce?.data?.message)
      }
      }

    return (
        <div>
            <Navbar />
            <h2> Buy Page</h2>
            <div className="buy-card">
                <div className="img-part">
                    <img src={product.image} className="img-buy" />
                </div>
                <div className="body-part">
                    <h2> {product.name}</h2>
                    <p> {product.description}</p>
                    <h3> ₹ {product.price}</h3>
                    <h3>{product.brand}</h3>
                    <h3> {product.category}</h3>

                    <h2> Quantity</h2>
                    <div className="quan-div">
                        <span className="quantity" onClick={decrease} > -</span>
                        <span className="quantity">{quantity}</span>
                        <span className="quantity" onClick={increase}> +</span>
                    </div>

                    <div className="input-values">
                        <input
                            type="radio"
                            name="deliveryCharges"
                            checked={deliveryCharges === "50"}
                            onClick={()=>{
                                setDeliveryCharges('50')
                            }}
                            
                        />delivery &nbsp;  &nbsp;

                        <input
                            type="radio"
                            name="deliveryCharges"
                            checked={deliveryCharges === "100"}
                            onClick={()=>{
                                setDeliveryCharges('100')
                            }}
                           
                        />fastest delivery
                    </div>

                    <input type="text" className="address-input" placeholder=" your shipping address"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                    />
                    <br></br>

                        <button className="order" onClick={Order}> Order</button>
                </div>

            </div>



        </div>
    )
}