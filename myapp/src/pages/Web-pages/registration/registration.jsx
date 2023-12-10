import React from "react";
import './registration.scss'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../../platform/api/users-api";

export const Registration = () =>{

    const [loading, setLoading] = useState(false)
    const [regFormData, setRegFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [color, setColor] = useState('grey')
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setRegFormData({...regFormData, [e.target.name]: e.target.value})
    }
    
    const registrUser =  async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!loading && regFormData.email && regFormData.password && regFormData.confirmPassword 
            && regFormData.password === regFormData.confirmPassword && emailRegex.test(regFormData.email)) {
            setLoading(true)
            const result = await createUser(regFormData)
            setColor('green');

            if (result) {
                setRegFormData({
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
                setLoading(false)
            }else {
            setColor('red');
            alert('Not all fields are filled');
            alert('Email is not valid');
            if (regFormData.password !== regFormData.confirmPassword) alert('Passwords do not match');
        }
        }
    }

    
    const handleLoginClick = () =>{
        navigate('/login')
    }

    return <div className="signup">
        <h1>Sign Up</h1>
        <div className="signup-form">
          <label>
            <input type="text" placeholder="Enter your email" value={regFormData.email} name={"email"}
            onChange={handleChanges} style={{border: '1px solid', color}}/>
          </label>
          <label>
            <input type="password" placeholder="Create your password" value={regFormData.password} name={"password"}
            onChange={handleChanges} style={{border: '1px solid', color}}/>
          </label>
          <label>
            <input type="password" placeholder="Confirm your password" value={regFormData.confirmPassword} 
            name={"confirmPassword"} onChange={handleChanges} style={{border: '1px solid', color}}/>
          </label>
        </div>
        <div className="signup-button">
            <button onClick={registrUser}>{loading ? 'loading....' : 'Registration'}</button>
        </div>
        <div className="signup-links">
            <p>Already have an account?</p>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    </div>
}

