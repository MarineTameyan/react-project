import axios from "axios";

const content = 'size-m'

export const getSizeList = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const addSize = async (sizeData)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, sizeData)
}

export const editSize = async (data, id) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/${content}/${id}`, data)
}

export const deleteSize = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/${content}/${id}`)
}

