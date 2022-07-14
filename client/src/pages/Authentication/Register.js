import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Register.css';
import {AiOutlineEye} from 'react-icons/ai'


export default function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const register = () => {
        Axios.post('http://localhost:3001/register', {
            name: name,
            username: username,
            password: password,
            email: email
        }).then((Response) => {
            console.log(Response)
            navigate('/login');
            console.log('redirecting to login page...')
        })
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () =>{
        setPasswordShown(!passwordShown)
    }

    return (
        <div className="register-wrapper login-wrapper">
            <div className='heading-container'>
                <h1>Sign Up</h1>
                <p>Create a new account</p>
            </div>

            <label>
                <input
                    type="text"
                    required
                    placeholder='Full Name'
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </label>
            <label>
                <input
                    type="email"
                    placeholder='E-mail'
                    required
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </label>
            <label>
                <input
                    type="text"
                    placeholder='Username'
                    required
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
            </label>
            <label>
                <input type={passwordShown ? "text" : "password"} placeholder='Password' required onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <AiOutlineEye onClick={togglePassword}/>
            </label>
            <div className='action-btn-container'>
                <button type="submit" className='action-btn cta-primary-btn' onClick={register}>Register</button>
            </div>

            <Link to="/login">Already have an account? Log In</Link>
        </div>
    )
}

