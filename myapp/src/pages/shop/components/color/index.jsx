import React from "react";
import "./style.css"

export const Color = () =>{
    const color = [
        {
            textcolor: "All Color"
        },
        {
            textcolor: "Black"
        },
        {
            textcolor: "White"
        },
        {
            textcolor: "Red"
        },
        {
            textcolor: "Blue"
        },
        {
            textcolor: "Green"
        }
    ]
    return <div className="color-list">
      {color.map((item, index) => (
        <div key={index} className="color">
          <input type="checkbox" />
            <p>{item.textcolor}</p>
          </div>
      ))}
    </div>
}