import { createContext, useContext, useEffect, useState } from "react";

//  default haytararum enq  datark object arjeq
const ProductContext = createContext({})



export const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([])
    const addToCard = (data) => {
        setProductList([...productList, data])
    }

    return <ProductContext.Provider value={
        { productList, addToCard }
    }>
        {children}
    </ProductContext.Provider>
}

export const useProductContext = () => {
    const testContext = useContext(ProductContext)

    return {
        productList: testContext.productList,
        addToCard: testContext.addToCard
    }
}