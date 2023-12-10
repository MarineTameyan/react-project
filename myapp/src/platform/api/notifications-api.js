import axios from "axios";

const content = 'message'

export const getMessage = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const setMessage = async (messageData)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, messageData)
}