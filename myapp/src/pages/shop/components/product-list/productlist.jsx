import React from "react";
import "./productlist.scss";
import Dress from "../../../../assets/images/blouse.jpg";
import Shoes from "../../../../assets/images/shoes.jpg";
import Camera from "../../../../assets/images/camera.jpg";
import Cosmetics from "../../../../assets/images/cosmetics.jpg";
import Lamp from "../../../../assets/images/lamp.jpg";
import Phone from "../../../../assets/images/phone.jpg";
import Watch from "../../../../assets/images/watch.jpg";
import ManFashion from "../../../../assets/images/mansweater.jpg";
import Chair from "../../../../assets/images/chair.jpg";

export const ProductList = () =>{
    const productlist = [
        {
            src: Camera,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: ManFashion,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: Lamp,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: Shoes,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: Phone,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: Watch,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: Dress,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: Cosmetics,
            productname: "Product Name Goes Here",
            productprice: '$123'
        },
        {
            src: Chair,
            productname: "Product Name Goes Here",
            productprice: '$123'
        }
    ]
    return <div className="products-lists">
      {productlist.map((item, index) => (
        <div key={index} className="product">
            <img src={item.src} alt="" />
            <h5>{item.productname}</h5>
            <p>{item.productprice}</p>
        </div>
      ))}
    </div>
}
