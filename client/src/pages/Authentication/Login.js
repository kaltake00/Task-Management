import Axios from 'axios';
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
import './Login.css';



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
                navigate('/dashboard');
            }
        })
    }

    
    return (
        <div className="login-wrapper">
            <div className='logo-container'>
            <img src={process.env.PUBLIC_URL + "images/footer-logo.png"} alt="" />
            </div>
            <h1>Please Log In</h1>
            <label>
                <p>Username</p>
                <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            </label>
            <div>
                <button type="submit" onClick={login}>Submit</button>
            </div>

            <Link to="/register">Don't have an account ? Sign Up</Link>

            <h2>{userStatus}</h2>
        </div>
    )
}

