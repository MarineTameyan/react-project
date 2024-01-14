import React from "react";
import "./size.scss";
import { getSizeList } from "../../../../../platform/api/size-api";
import { useState, useEffect } from "react";

export const Size = () =>{
    const [sizeList, setSizeList] = useState([]);

    useEffect(() => {
        getSizeListData();
      }, []);
    
      const getSizeListData = async () => {
        const result = await getSizeList();
        if (result.data) {
          setSizeList(result.data);
        }
      };

    return <div className="size-list">
      {sizeList.map((item, index) => (
        <div key={index} className="size">
          <input type="checkbox" />
            <p>{item.name}</p>
          </div>
      ))}
    </div>
}