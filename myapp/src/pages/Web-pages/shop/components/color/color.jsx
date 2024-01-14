import React from "react";
import "./color.scss"
import { getColorList } from "../../../../../platform/api/color-api";
import { useState, useEffect } from "react";

export const Color = () =>{
    const [colorList, setColorList] = useState([]);

    useEffect(() => {
        getColorListData();
      }, []);
    
      const getColorListData = async () => {
        const result = await getColorList();
        if (result.data) {
          setColorList(result.data);
        }
      }

    return <div className="color-list">
      {colorList.map((item, index) => (
        <div key={index} className="color">
          <input type="checkbox" />
            <p>{item.colorName}</p>
          </div>
      ))}
    </div>
}