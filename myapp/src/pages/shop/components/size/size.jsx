import React from "react";
import "./size.scss"

export const Size = () =>{
    const size = [
        
        {
            textsize: "XS"
        },
        {
            textsize: "S"
        },
        {
            textsize: "M"
        },
        {
            textsize: "L"
        },
        {
            textsize: "XL"
        }
    ]
    return <div className="size-list">
      {size.map((item, index) => (
        <div key={index} className="size">
          <input type="checkbox" />
            <p>{item.textsize}</p>
          </div>
      ))}
    </div>
}