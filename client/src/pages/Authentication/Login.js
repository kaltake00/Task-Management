import Axios from 'axios';
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
import './Login.css';
import {AiOutlineEye} from 'react-icons/ai'



export default function Login(props) {

    let navigate = useNavigate();
    //Axios.defaults.withCredentials = true;

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userStatus, setUserStatus] = useState('')

    const login = async() => {
        await Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((Response) => {
            if (Response.data.message) {
                setUserStatus(Response.data.message)
            } else {
                setUserStatus(Response.data.name)
                props.onLoggingIn(Response.data);
                navigate('/dashboard/home');
            }
        })
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () =>{
        setPasswordShown(!passwordShown)
    }
    return (
        <div className="login-wrapper">
            <div className='heading-container'>
                <h1>Login</h1>
                <p>Connect to your account</p>
            </div>
            <label>
                <input type="text" placeholder='Username' onChange={(e) => {setUsername(e.target.value)}}/>
            </label>
            <label>
                <input type={passwordShown ? "text" : "password"} placeholder='Password' onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <AiOutlineEye onClick={togglePassword}/>
            </label>
            <div className='action-btn-container'>
                <button type="submit" className='action-btn cta-primary-btn' onClick={login}>SIGN IN</button>
            </div>

            <Link to="/register">Don't have an account ? Sign Up</Link>

            <h2>{userStatus}</h2>
        </div>
    )
}

