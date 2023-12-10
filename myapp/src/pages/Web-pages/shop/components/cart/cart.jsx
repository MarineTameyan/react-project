import React from "react"
import "./cart.scss"
import Dress from "../../../../../assets/images/blouse.jpg";
import Shoes from "../../../../../assets/images/shoes.jpg";
import Camera from "../../../../../assets/images/camera.jpg";
import Cosmetics from "../../../../../assets/images/cosmetics.jpg";


export const Cart = () =>{
    const cart = [
        {
            src: Dress,
            cartname: "Product Name",
            price: "$150"
        },
        {
            src: Shoes,
            cartname: "Product Name",
            price: "$150"
        },
        {
            src: Camera,
            cartname: "Product Name",
            price: "$150"
        },
        {
            src: Cosmetics,
            cartname: "Product Name",
            price: "$150"
        },
    ]

    return <div className="cart">
      {cart.map((item, index) => (
        <div key={index} className="cart-details">
            <img src={item.src} alt="" />
            <p>{item.cartname}</p>
            <p>{item.price}</p>
            <div className="first-button">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            <p>{item.price}</p>
            <div className="remove-button">
                <button>X</button>
            </div>
        </div>
      ))}
    </div>
}