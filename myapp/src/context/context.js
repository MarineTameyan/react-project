import { createContext, useContext, useState } from "react";

const ProductContext = createContext({})

export const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([])

    const addToCard = (data) => {
        const findProduct = productList.find(x => x._id === data._id)

        if (findProduct) {
            findProduct.count = data.count
        } else {
            setProductList([...productList, data])
        }
    }

    return <ProductContext.Provider value={
        { productList, addToCard }
    }>
        {children}
    </ProductContext.Provider>
}

export const useProductContext = () => {
    const productContext = useContext(ProductContext)

    return {
        productList: productContext.productList,
        addToCard: productContext.addToCard
    }
}
