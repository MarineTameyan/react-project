import React, { useState } from "react";
import './login.scss'
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../platform/api/users-api";

export const Login = () =>{
    
    const [loading, setLoading] = useState(false)
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    })
    const [color, setColor] = useState('grey')
    const navigate = useNavigate()

    const handleChangeLogin = (e) => {
        setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
    }

    const loginUser = async ()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        

        const result = await getUsers()
        if(result && result.data.length){
            const user = result.data.find(item=>item.email===loginFormData.email 
                && item.password===loginFormData.password && emailRegex.test(loginFormData.email))
                setColor('green')
            if(user){
                localStorage.setItem('token', user._id)
                window.location.reload()
            }
        }else{
            setColor('red')
            alert('Not all fields are filled')
            alert('Email is not valid')
        }
        navigate("/admin")
    }
 
    const handleSignupClick = () =>{
        navigate('/registration')
    }

    return <div className="login">
        <h1>Login</h1>
        <div className="login-form">
          <label>
            <input type="text" placeholder="Enter your email" value={loginFormData.email} name={'email'}
            onChange={handleChangeLogin} style={{border: '1px solid', color}}/>
          </label>
          <label>
            <input type="password" placeholder="Enter your password" value={loginFormData.password} name={'password'}
            onChange={handleChangeLogin} style={{border: '1px solid', color}}/>
          </label>
        </div>
        <div className="login-button">
            <button onClick={loginUser}>{loading ? 'loading....' : 'Login'}</button>
        </div>
        <div className="login-links">
            <p>Don't have an account?</p>
            <button onClick={handleSignupClick}>Sign Up</button>
        </div>
    </div>
}