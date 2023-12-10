import React, { useState } from "react";
import Dress from "../../../assets/images/blouse.jpg";
import { Size } from "../shop/components/size/size";
import { Color } from "../shop/components/color/color";
import "./shopdetail.scss"
import { Tabs } from "../shop/components/tabs/tab";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../../context/context";
import { ProductCard } from "../../../components/product-card";
import Dress_1 from "../../../assets/images/blouse.jpg";
import Shoes from "../../../assets/images/shoes.jpg";
import Camera from "../../../assets/images/camera.jpg";
import Cosmetics from "../../../assets/images/cosmetics.jpg";
import Lamp from "../../../assets/images/lamp.jpg";
import Phone from "../../../assets/images/phone.jpg";
import Watch from "../../../assets/images/watch.jpg";
import ManFashion from "../../../assets/images/mansweater.jpg";
import Chair from "../../../assets/images/chair.jpg";

export const ShopDetail = () =>{
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
            src: Dress_1,
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

    const {addToCard} = useProductContext()
    const [count, setCount] = useState(1)

    const handlePlusCount = () =>{
        setCount(count+1)
    }

    const handleMinusCount = () =>{
        if(count > 1){
        setCount(count-1)   
    }
    }

    const navigate = useNavigate()

    const handleShopClick = () =>{
        addToCard(
            {
                namr:'ttest',
                desc:'test',
                price:300,
                count
            }
        )
        // navigate('/shop/shopping-cart')
    }
    

    return <div className="box">
    <div className="img-box">
        <div className="image">
            <img src={Dress} alt="" />
        </div>
        <div className="text-box">
            <h5>Product Name Goes Here</h5>
            <p className="item-price">$150</p>
            <p className="text">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no seaNonumy</p>
           <div className="sizes">
                    <Size/>
            </div>
            <div className="colors">
                    <Color/>
            </div>
            <div className="box-buttons">
              <div className="first-button">
                <button onClick={handleMinusCount}>-</button>
                <p>{count}</p>
                <button onClick={handlePlusCount}>+</button>
              </div>
              <div className="second-button">
                <button onClick={handleShopClick}>Add to Cart</button>
              </div>
        </div>
        </div>
    </div>
    <div className="tabs">
        <div className="component">
            <Tabs/>
        </div>
    </div>
    <div className="product-show">
    {product.map((item,index)=>{
        return <ProductCard key={index} data={item}/>
    })}
    </div>
    </div>
}