import React from "react";
import { Price } from "./components/price/price";
import "./shop.scss"
import { Color } from "./components/color/color";
import { Size } from "./components/size/size";
import Dress from "../../../assets/images/blouse.jpg";
import Shoes from "../../../assets/images/shoes.jpg";
import Camera from "../../../assets/images/camera.jpg";
import Cosmetics from "../../../assets/images/cosmetics.jpg";
import Lamp from "../../../assets/images/lamp.jpg";
import Phone from "../../../assets/images/phone.jpg";
import Watch from "../../../assets/images/watch.jpg";
import ManFashion from "../../../assets/images/mansweater.jpg";
import Chair from "../../../assets/images/chair.jpg";
import { ProductCard } from "../../../components/product-card";

function Shop () {
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
        },
        {
            src: Chair,
            product: "Product Name Goes Here",
            price: '$123',
            id: "id9"
        }
    ]

    return <div className="shop">
        <div className="shop-info">
            <h1>FILTER BY PRICE</h1>
            <Price/>
            <h1>FILTER BY COLOR</h1>
            <Color/>
            <h1>FILTER BY SIZE</h1>
            <Size/>
        </div>
        <div className="product-card">
        {product.map((item,index)=>{
                return <ProductCard key={index} data={item}/>
            })}
        </div>
    </div>
}

export default Shop