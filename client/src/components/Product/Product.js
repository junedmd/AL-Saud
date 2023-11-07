import React from "react";
import "./Product.css"
import { Link } from 'react-router-dom'

export default function Product({id,name,image,price,description,index,brand,category}){
    return(
        <div className="product-card" key={index}>
                                <img src={image} className="img-product" />
                                <h2>{name}</h2>
                                <p className="text3">{description}</p>
                                <p className="text4">₹ {price}</p>
                                <p className="text5"> {brand}</p>
                                <p className="text6"> {category}</p>

                                <Link to={`/buy/${id}`}  >
                                <button  type="button" className="btn-product">
                                    Buy now
                                </button>
                                </Link>
                            </div>
    )
}