import axios from "axios";

const content = 'products-m'

export const getProductList = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const addProduct = async (productData)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, productData)
}

export const editProduct = async (data, id) => {
    return await axios.put(`${process.env.REACT_APP_BASE_URL}/${content}/${id}`, data)
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BASE_URL}/${content}/${id}`)
}