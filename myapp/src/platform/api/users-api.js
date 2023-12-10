import axios from "axios";

const content = 'users'

export const getUsers = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
}

export const createUser = async (userData)=>{
    return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`, userData)
}

// export const getMessage = async ()=>{
//     return await axios.get(`${process.env.REACT_APP_API_URL}/${content}`)
// }

// export const setMessage = async ()=>{
//     return await axios.post(`${process.env.REACT_APP_API_URL}/${content}`)
// }