import React from "react";
import "./home.scss"
import { Info } from "./components/info/info";
import { Categories } from "./components/categories/categories";
import ImageSlider from "./components/slider/slider";
import { ShopBox } from "./components/shop-box/shopBox";
import image_1 from '../../../assets/images/first.jpg';
import image_2 from '../../../assets/images/second.jpg';
import { ProductCard } from "../../../components/product-card";
import { getProductList } from "../../../platform/api/product-api";
import { useState, useEffect } from "react";

function Home() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductsData();
        console.log(productList);
      }, []);
    

    const getProductsData = async () => {
        const result = await getProductList();
        if (result.data) {
          console.log(result.data);
          setProductList(result.data);
        }
      };
    
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
            {productList.map((item,index)=>{
                return <ProductCard key={index} data={item}/>
            })}
        </div>
        <div className="specials G-flex">
            <ShopBox offerData={{ percent: '30', image: image_1, id: '24987' }} />
            <ShopBox offerData={{ percent: '30', image: image_2, id: '24987' }} />
        </div>
        <h1>RECENT PRODUCTS</h1>
        <div className="products">
        {productList.map((item,index)=>{
                return <ProductCard key={index} data={item}/>
            })}
        </div>
    </div>

}


export default Home

