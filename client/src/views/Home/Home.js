import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
export default function Home() {
    const [product, setProduct] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get('/products');
            setProduct(response?.data?.data)
            console.log(response.data.data)
            console.log(product)
        } catch (e) {
            console.log(e.message);
            alert(e.message)
        }
    };

    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            <Navbar />
            <h1> Home Page</h1>

            <div className="cards-container">
                {
                    product?.map((product ,index) => {
                        const { name, description, price, image, brand, category } = product;
                        return (
                            <div className="product-card" key={index}>
                                <img src={image} className="img-product" />
                                <h2>{name}</h2>
                                <p className="text3">{description}</p>
                                <p className="text4">₹ {price}</p>
                                <p className="text5"> {brand}</p>
                                <p className="text6"> {category}</p>

                                <button className="btn-product">
                                    Buy now
                                </button>
                            </div>
                        )



                    })
                }
            </div>
        </div>
    )
}