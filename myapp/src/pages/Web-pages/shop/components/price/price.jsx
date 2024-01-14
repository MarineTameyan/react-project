import React, { useEffect, useState } from "react";
import "./price.scss"

export const Price = ({productList}) => {
    
    const [priceRange, setPriceRange] = useState()

    useEffect(() => {
        if (productList.length) {
            let min = +productList[0].price
            let max = +productList[0].price
            productList.forEach((item, index) => {
                if (+item.price > max) {
                    max = +item.price
                }
                if (+item.price < min) {
                    min = +item.price
                }
            })

            setMaxPrice(max)
            setMinPrice(min)
        }
    }, [productList]);

    const [maxPrice, setMaxPrice] = useState()
    const [minPrice, setMinPrice] = useState()

    const handleChange = (e) => {
        setPriceRange(e.target.value)
    }

    return <div className="price-list">
        <p className="range-price">Range By {minPrice}-{priceRange}</p>
        <div className="price">
            <input type="range" onChange={handleChange} />
        </div>
        <div className="range-prices">
            <p>{minPrice}</p>
            <p>{maxPrice}</p>
        </div>
    </div>
}
