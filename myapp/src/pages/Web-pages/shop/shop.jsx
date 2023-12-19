import React from "react";
import { Price } from "./components/price/price";
import "./shop.scss"
import { Color } from "./components/color/color";
import { Size } from "./components/size/size";
import { getProductList } from "../../../platform/api/product-api";
import { useState, useEffect } from "react";
import { ProductCard } from "../../../components/product-card";

function Shop () {
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
        {productList.map((item,index)=>{
                return <ProductCard key={index} data={item}/>
            })}
        </div>
    </div>
}

export default Shop