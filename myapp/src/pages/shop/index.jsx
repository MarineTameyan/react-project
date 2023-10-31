import React from "react";
import { Price } from "./components/price";
import "./style.css"
import { Color } from "./components/color";
import { Size } from "./components/size";
import { ProductList } from "./components/product-list";

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