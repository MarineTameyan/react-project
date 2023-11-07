import React from "react";
import "./home.scss"
import { Info } from "./components/info/info";
import { Categories } from "./components/categories/categories";
import { GlobalProducts } from "../../components/global/global";
import ImageSlider from "./components/slider/slider";

function Home() {
    return <div className="home-page">
        <div className="home-photos">
            <div className="fashion">
                <ImageSlider/>
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
        <Info />
        <h1>CATEGORIES</h1>
        <Categories />
        <h1>FEATURED PRODUCTS</h1>
        <div className="products">
            <GlobalProducts/>
        </div>
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
        <div className="products">
            <GlobalProducts/>
        </div>
    </div>

}


export default Home

