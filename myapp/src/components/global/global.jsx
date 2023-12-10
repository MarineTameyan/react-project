import React from "react";
import "./global.scss";
import Dress from "../../assets/images/blouse.jpg";
import Shoes from "../../assets/images/shoes.jpg";
import Camera from "../../assets/images/camera.jpg";
import Cosmetics from "../../assets/images/cosmetics.jpg";
import Lamp from "../../assets/images/lamp.jpg";
import Phone from "../../assets/images/phone.jpg";
import Watch from "../../assets/images/watch.jpg";
import ManFashion from "../../assets/images/mansweater.jpg";
import { Link, useNavigate } from "react-router-dom";
import { routerLinks } from "../../router/router";

export const GlobalProducts = () =>{

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/shop/shop-detail')
    }


    const product = [
        {
            src: Camera,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id1"
        },
        {
            src: ManFashion,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id2"
        },
        {
            src: Lamp,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id3"
        },
        {
            src: Shoes,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id4"
        },
        {
            src: Phone,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id5"
        },
        {
            src: Watch,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id6"
        },
        {
            src: Dress,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id7"
        },
        {
            src: Cosmetics,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id8"
        }
    ]
    return <>
      {product.map((item, index) => (
        <Link to={routerLinks.DETAIL.replace(':id', item.id)} key={index} className="product-list" onClick={handleClick}>
            <img src={item.src} alt="" />
            <h5>{item.product}</h5>
            <p>{item.price}</p>
        </Link>
      ))}
    </>
}