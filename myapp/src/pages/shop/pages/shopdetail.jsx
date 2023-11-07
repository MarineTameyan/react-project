import React from "react";
import Dress from "../../../assets/images/blouse.jpg";
import { Size } from "../components/size/size";
import { Color } from "../components/color/color";
import "./shopdetail.scss"
import { Tabs } from "../components/tabs/tab";
import { useNavigate } from "react-router-dom";

export const ShopDetail = () =>{
    const navigate = useNavigate()

    const handleShopClick = () =>{
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
                <button>-</button>
                <p>1</p>
                <button>+</button>
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
    </div>
}