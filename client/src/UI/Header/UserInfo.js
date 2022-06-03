import React from 'react'
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
                    <p>My Account</p>
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo