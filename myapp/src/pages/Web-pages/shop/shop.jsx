import React, { useEffect, useState } from "react";
import "./shop.scss"
import { getColorList } from "../../../platform/api/color-api";
import { getSizeList } from "../../../platform/api/size-api";
import { getProductList } from "../../../platform/api/product-api";
import { ProductCard } from "../../../components/product-card";

function Shop () {
  const [priceRange, setPriceRange] = useState(0);
  const [maxPrice, setMaxPrice] = useState();
  const [minPrice, setMinPrice] = useState();
  const [productList, setProductList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  const [filterModel, setFilterModel] = useState({
    selectedColors: [],
    selectedSizes: [],
    maxPrice: 0
})

  useEffect(() => {
    getSizeListData();
    getProductsData();
    getColorListData();
  }, []);

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

    const handleChange = (e) => {
        setPriceRange(e.target.value)
    }
    
      const getSizeListData = async () => {
        const result = await getSizeList();
        if (result.data) {
          setSizeList(result.data);
        }
      };

      const getColorListData = async () => {
        const result = await getColorList();
        if (result.data) {
          setColorList(result.data);
        }
      }

    const getProductsData = async () => {
        const result = await getProductList();
        if (result.data) {
          setProductList(result.data);
          setFilteredList(result.data)
        }
      };

      useEffect(() => {
        console.log(filterModel)
        const newFilterLis = productList.filter(x =>
            filterModel.selectedColors.includes(x.color)
            || x.size.some(y => filterModel.selectedSizes.includes(y))
            || +x.price <= filterModel.maxPrice)
        // x=>filterModel.selectedColors.includes(x.color) || x.size.some(y=>filterModel.selectedSizes.includes(y))

        // if (filterModel.selectedColors.includes(x.color)) {
        //     return x
        // }

        // x.size.forEach(itemSize => {
        //     if (filterModel.selectedSizes.includes(itemSize)) {
        //         return x
        //     }
        // })

        // if(x.size.some(y=>filterModel.selectedSizes.includes(y))
        // })
        if ((filterModel.selectedSizes.length ||
            filterModel.selectedColors.length ||
            filterModel.maxPrice > 0) || newFilterLis.length
        ) {
            setFilteredList(newFilterLis)
        } else {
            setFilteredList(productList)
        }

    }, [filterModel]);


    const selectColorsAndSize = (id, filterKey) => {
        let index = filterModel[filterKey].indexOf(id);
        let newList = filterModel[filterKey];
        if (index >= 0) {
            newList.splice(index, 1);
        } else {
            newList.push(id);
        }
        setFilterModel({...filterModel, [filterKey]: newList});
    }

    return <div className="shop">
        <div className="shop-info">
            <h1>FILTER BY PRICE</h1>
            <div className="price-list">
                <p className="range-price">Range By {minPrice}-{priceRange}</p>
              <div className="price">
                <input type="range" onChange={handleChange} value={priceRange} />
              </div>
              <div className="range-prices">
                <p>{minPrice}</p>
                <p>{maxPrice}</p>
              </div>
            </div>
            <h1>FILTER BY COLOR</h1>
            <div className="color-list">
                {colorList.map((item, index) => (
              <div key={index} className="color">
                <input checked={filterModel.selectedColors.includes(item._id)}
                    onChange={() => { selectColorsAndSize(item._id, 'selectedColors')}} type="checkbox"/>
                <p>{item.colorName}</p>
              </div>
            ))}
            </div>
            <h1>FILTER BY SIZE</h1>
            <div className="size-list">
                {sizeList.map((item, index) => (
              <div key={index} className="size">
                <input type="checkbox" checked={filterModel.selectedSizes.includes(item._id)}
                    onChange={() => {selectColorsAndSize(item._id, 'selectedSizes')}}/>
                <p>{item.name}</p>
              </div>
              ))}
              </div>
            </div>
            <div className="product-card">
              {filteredList.length ? (
                filteredList.map((item, index) => (
                  <ProductCard key={index} data={item} />
                  ))
                  ) : (
            <div>
                <p>Empty product list</p>
            </div>
            )}
          </div>
     </div>
}

export default Shop