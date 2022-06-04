import { useState } from "react";
import { Outlet, NavLink, Navigate, Link } from "react-router-dom";
//import { FaAngleDown, FaRegUser } from 'react-icons/fa';
//import { RiDashboardLine } from 'react-icons/ri'
import { IoMdMenu } from 'react-icons/io'


import './new-layout.css';
import UserInfo from "../UI/Header/UserInfo";

const Layout = ({ auth, userInfo }) => {
  const [expandedMenu, setExpandedMenu] = useState(false);


  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  console.log('Layout.js user informations: ', userInfo)

  function expandMenu(){
    setExpandedMenu(!expandedMenu)
  }
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="hamb-wrapper" onClick={expandMenu}>
            <IoMdMenu></IoMdMenu>
          </div>
          <Link to="/">
            <div className="logo-container">
              {/* <img src={process.env.PUBLIC_URL + "/images/footer-logo.png"} alt="" /> */}
              <img src={`${process.env.PUBLIC_URL}/images/footer-logo.png`} alt="" />

              <h1 className="logo-text">CMS</h1>
            </div>
          </Link>

          {!userInfo
            ? <button>Log In</button>
            : <UserInfo userInfo={userInfo} />
          }

        </div>
      </div>

      <div className="dashboard-wrapper">
        <div className={`sidebar ${expandedMenu ? "active" : ""}`}>
          <div className="sidebar-links">
            <NavLink to="/dashboard/home">
              <div className="single-sidebar">
                {/* <RiDashboardLine className="dashboard-icon" /> */}
                <img className="dashboard-icon" src={process.env.PUBLIC_URL + "/icons/dashboard.png"} alt="" />
                <p className="single-sidebar-name">Dashboard</p>
              </div>
            </NavLink>
            <NavLink to="/dashboard/customers" activeclassname="active">
              <div className="single-sidebar">
                {/* <GrGroup className="dashboard-icon" /> */}
                <img className="dashboard-icon" src={process.env.PUBLIC_URL + "/icons/customers.png"} alt="" />
                <p className="single-sidebar-name">Customers</p>
              </div>
            </NavLink>
            <NavLink to="/dashboard/users" activeclassname="active">
              <div className="single-sidebar">
                {/* <FaUsers className="dashboard-icon" /> */}
                <img className="dashboard-icon" src={process.env.PUBLIC_URL + "/icons/users.png"} alt="" />
                <p className="single-sidebar-name">Users</p>
              </div>
            </NavLink>
            <NavLink to="/dashboard/tasks" activeclassname="active">
              <div className="single-sidebar">
                {/* <FaUsers className="dashboard-icon" /> */}
                <img className="dashboard-icon" src={process.env.PUBLIC_URL + "/icons/tasks.png"} alt="" />
                <p className="single-sidebar-name">Tasks</p>
              </div>
            </NavLink>
            <NavLink to="/dashboard/my-tasks" activeclassname="active">
              <div className="single-sidebar">
                {/* <FaUsers className="dashboard-icon" /> */}
                <img className="dashboard-icon" src={process.env.PUBLIC_URL + "/icons/my-tasks.png"} alt="" />
                <p className="single-sidebar-name">My Tasks</p>
              </div>
            </NavLink>
          </div>
          <div className="user-links">
            <NavLink to="/dashboard/my-account" activeclassname="active">
              <div className="single-sidebar">
                <img className="dashboard-icon" src={process.env.PUBLIC_URL + "/icons/my-account.png"} alt="" />
                <p className="single-sidebar-name">Account Settings</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout;