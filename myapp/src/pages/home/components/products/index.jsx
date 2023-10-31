import React from "react";
import "./style.css";
import Dress from "../../../../assets/images/blouse.jpg";
import Shoes from "../../../../assets/images/shoes.jpg";
import Camera from "../../../../assets/images/camera.jpg";
import Cosmetics from "../../../../assets/images/cosmetics.jpg";
import Lamp from "../../../../assets/images/lamp.jpg";
import Phone from "../../../../assets/images/phone.jpg";
import Watch from "../../../../assets/images/watch.jpg";
import ManFashion from "../../../../assets/images/mansweater.jpg";

export const Products = () =>{
    const product = [
        {
            src: Camera,
            product: "Product Name Goes Here",
            price: '$123'
        },
        {
            src: ManFashion,
            product: "Product Name Goes Here",
            price: '$123'
        },
        {
            src: Lamp,
            product: "Product Name Goes Here",
            price: '$123'
        },
        {
            src: Shoes,
            product: "Product Name Goes Here",
            price: '$123'
        },
        {
            src: Phone,
            product: "Product Name Goes Here",
            price: '$123'
        },
        {
            src: Watch,
            product: "Product Name Goes Here",
            price: '$123'
        },
        {
            src: Dress,
            product: "Product Name Goes Here",
            price: '$123'
        },
        {
            src: Cosmetics,
            product: "Product Name Goes Here",
            price: '$123'
        }
    ]
    return <div className="products">
      {product.map((item, index) => (
        <div key={index} className="product-list">
            <img src={item.src} alt="" />
            <h5>{item.product}</h5>
            <p>{item.price}</p>
        </div>
      ))}
    </div>
}