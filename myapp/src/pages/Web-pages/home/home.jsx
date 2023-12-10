import React from "react";
import "./home.scss"
import { Info } from "./components/info/info";
import { Categories } from "./components/categories/categories";
import ImageSlider from "./components/slider/slider";
import { ShopBox } from "./components/shop-box/shopBox";
import image_1 from '../../../assets/images/first.jpg';
import image_2 from '../../../assets/images/second.jpg';
import { ProductCard } from "../../../components/product-card";
import Dress from "../../../assets/images/blouse.jpg";
import Shoes from "../../../assets/images/shoes.jpg";
import Camera from "../../../assets/images/camera.jpg";
import Cosmetics from "../../../assets/images/cosmetics.jpg";
import Lamp from "../../../assets/images/lamp.jpg";
import Phone from "../../../assets/images/phone.jpg";
import Watch from "../../../assets/images/watch.jpg";
import ManFashion from "../../../assets/images/mansweater.jpg";

function Home() {

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
    
    return <div className="home-page">
        <div className="home-photos">
            <div className="fashion">
                <ImageSlider />
            </div>
            <div className="special-orders">
                <ShopBox offerData={{ percent: '30', image: image_1, id: '24987' }} />
                <ShopBox offerData={{ percent: '30', image: image_2, id: '24987' }} />
            </div>
        </div>
        <Info />
        <h1>CATEGORIES</h1>
        <Categories />
        <h1>FEATURED PRODUCTS</h1>
        <div className="products">
            {product.map((item,index)=>{
                return <ProductCard key={index} data={item}/>
            })}
        </div>
        <div className="specials G-flex">
            <ShopBox offerData={{ percent: '30', image: image_1, id: '24987' }} />
            <ShopBox offerData={{ percent: '30', image: image_2, id: '24987' }} />
        </div>
        <h1>RECENT PRODUCTS</h1>
        <div className="products">
        {product.map((item,index)=>{
                return <ProductCard key={index} data={item}/>
            })}
        </div>
    </div>

}


export default Home

