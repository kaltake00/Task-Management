import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Register.css';

export default function Login() {

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
        })
    }

    // const register = async (e) => {
    //     e.preventDefault()

    //     console.log(name, username, password)
    // 	try {
    // 	  await Axios.post('https://customer-relations.herokuapp.com/register', {
    //         name: name, 
    //         username: username, 
    //         password: password,
    //       });
    // 	} catch (err) {
    // 		// Handle Error Here
    // 		console.error(err);
    // 	}
    // };


    return (
        <div className="register-wrapper">
            <h1>Please register a new account</h1>

            <label>
                <p>Full Name</p>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
            </label>
            <label>
                <p>Email</p>
                <input
                    type="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </label>
            <label>
                <p>Username</p>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
            </label>
            <label>
                <p>Password</p>
                <input type="password" required onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            </label>
            <div>
                <button type="submit" onClick={register}>Register</button>
            </div>

            <Link to="/login">Already have an account? Log In</Link>
        </div>
    )
}

