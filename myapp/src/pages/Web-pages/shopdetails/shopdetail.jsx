import React, { useState } from "react";
import Dress from "../../../assets/images/blouse.jpg";
import { Size } from "../shop/components/size/size";
import { Color } from "../shop/components/color/color";
import "./shopdetail.scss"
import { Tabs } from "../shop/components/tabs/tab";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../../context/context";
import { ProductCard } from "../../../components/product-card";
import { useEffect } from "react";
import { getProductList } from "../../../platform/api/product-api";

export const ShopDetail = () =>{
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
        navigate('/shop/shopping-cart')
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
    {productList.map((item,index)=>{
        return <ProductCard key={index} data={item}/>
    })}
    </div>
    </div>
}