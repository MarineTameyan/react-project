import React from "react";
import "./home.css"
import { Info } from "./components/info";
import { Categories } from "./components/categories";
import { Products } from "./components/products";

function Home () {
    return <div className="home-page">
        <div className="home-photos">
            <div className="fashion">
                <h2>Man Fashion</h2>
                <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                <div className="shop-button">
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="special-orders">
                <div className="first-offer">
                    <p>SAVE 20%</p>
                    <p>Special offer</p>
                    <div className="click">
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="second-offer">
                    <p>SAVE 20%</p>
                    <p>Special offer</p>
                    <div className="click">
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        <Info/>
        <h1>CATEGORIES</h1>
        <Categories/>
        <h1>FEATURED PRODUCTS</h1>
        <Products/>
        <div className="specials">
                <div className="first-special">
                    <p>SAVE 20%</p>
                    <p>Special offer</p>
                    <div className="click">
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="second-special">
                    <p>SAVE 20%</p>
                    <p>Special offer</p>
                    <div className="click">
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
            <h1>RECENT PRODUCTS</h1>
            <Products/>
    </div>
    
}


export default Home

