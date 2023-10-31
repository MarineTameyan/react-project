import React from "react";
import Check from "../../../../assets/images/check.png";
import Transport from "../../../../assets/images/truck.png";
import Reply from "../../../../assets/images/reply.png";
import Phone from "../../../../assets/images/phonelogo.png";
import "./style.css"

export const Info = () =>{
    return <div className="info">
        <div className="home-info">
            <img src={Check} alt="" />
            <p>Quality Product</p>
        </div>
        <div className="home-info">
            <img src={Transport} alt="" />
            <p>Free Shipping</p>
        </div>
        <div className="home-info">
            <img src={Reply} alt="" />
            <p>14-Day Return</p>
        </div>
        <div className="home-info">
            <img src={Phone} alt="" />
            <p>24/7 Support</p>
        </div>
    </div>
}