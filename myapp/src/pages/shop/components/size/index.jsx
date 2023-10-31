import React from "react";
import "./style.css"

export const Size = () =>{
    const size = [
        {
            textsize: "All Size"
        },
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