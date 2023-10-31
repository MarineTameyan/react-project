import React from "react";
import "./style.css"

export const Price = () =>{
    const price = [
        {
            text: "All Price"
        },
        {
            text: "$0-$100"
        },
        {
            text: "$100-$200"
        },
        {
            text: "$200-$300"
        },
        {
            text: "$300-$400"
        },
        {
            text: "$400-$500"
        }
    ]
    return <div className="price-list">
      {price.map((item, index) => (
        <div key={index} className="price">
          <input type="checkbox" />
            <p>{item.text}</p>
          </div>
      ))}
    </div>
}
