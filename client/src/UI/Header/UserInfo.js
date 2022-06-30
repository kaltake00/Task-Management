import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleDown, FaRegUser } from 'react-icons/fa';


function UserInfo({ userInfo }) {
    return (
        <div className="account-container">
            <div className="acc-info">
                <p className="acc-name">{userInfo.name}</p>
                <p className="acc-email">Role: {userInfo.role}</p>
            </div>
            <div className="acc-icon">
                <FaRegUser className="account-icon" />
                <FaAngleDown />
                <div className="dropdown-content">
                    <Link to="/dashboard/my-account" className='dropdown-link'>My Account</Link>
                    <Link to="/" className='dropdown-link'>Log Out</Link>
                </div>
            </div>
        </div>
    )
}

export default UserInfo