import React from "react";
import Dress from "../../../../assets/images/blouse.jpg";
import Shoes from "../../../../assets/images/shoes.jpg";
import Camera from "../../../../assets/images/camera.jpg";
import Cosmetics from "../../../../assets/images/cosmetics.jpg";
import "./categories.scss"

export const Categories = () =>{
    const List = [
        {
            src: Dress,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Camera,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Shoes,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Cosmetics,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Cosmetics,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Shoes,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Camera,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Dress,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Camera,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Dress,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Cosmetics,
            anun: "Category Name",
            quantity: '100 Products'
        },
        {
            src: Shoes,
            anun: "Category Name",
            quantity: '100 Products'
        }
    ]
    return <div className="categories">
      {List.map((item, index) => (
        <div key={index} className="category">
          <div className="category-img">
            <img src={item.src} alt="" />
          </div>
          <div className="text">
            <h5>{item.anun}</h5>
            <p>{item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
    
}
