import axios from "axios";

const content = 'color-m'

export const getColorList = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const addColor = async (colorData)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, colorData)
}

export const editColor = async (data, id) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/${content}/${id}`, data)
}

export const deleteColor = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/${content}/${id}`)
}