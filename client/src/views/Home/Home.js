import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import Product from "../../components/Product/Product";
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
          

            <div className="cards-container">
                {
                    product?.map((product ,index) => {
                        const { _id,name, description, price, image, brand, category } = product;
                        return (
                            <Product 
                            key={index}
                            name={name}
                            image={image}
                            price={price}
                            description={description}
                            id={_id}
                            brand={brand}
                            category={category}
                            
                            
                            />
                        )



                    })
                }
            </div>
        </div>
    )
}