import axios from "axios";

const content = 'category-m'

export const getCategoryList = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const addCategory = async (categoryData)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, categoryData)
}

export const editCategory = async (data, id) => {
    return await axios.put(`${process.env.REACT_APP_BASE_URL}/${content}/${id}`, data)
}

export const deleteCategory = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BASE_URL}/${content}/${id}`)
}

