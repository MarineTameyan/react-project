import React from "react";
import { Price } from "./components/price/price";
import "./shop.scss"
import { Color } from "./components/color/color";
import { Size } from "./components/size/size";
import { ProductList } from "./components/product-list/productlist";

function Shop () {
    return <div className="shop">
        <div className="shop-info">
            <h1>FILTER BY PRICE</h1>
            <Price/>
            <h1>FILTER BY COLOR</h1>
            <Color/>
            <h1>FILTER BY SIZE</h1>
            <Size/>
        </div>
        <div className="pro">
            <ProductList/>
        </div>
    </div>
}

export default Shop