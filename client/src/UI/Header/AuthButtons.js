import React from 'react'
import { Link } from 'react-router-dom';

import { FiUserCheck } from 'react-icons/fi'
import { BiLogIn } from 'react-icons/bi'


function AuthButtons() {
    return (
        <div>
            <div className="account-container">
                <div className="login-reg-btns">
                    <Link to="/login">
                        <button className='login-btn cta-primary-btn'>
                            Log In
                            <BiLogIn />
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className='signup-btn cta-primary-btn'>
                            Sign Up
                            <FiUserCheck />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthButtons