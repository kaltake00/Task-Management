import { Outlet, NavLink, Navigate, Link } from "react-router-dom";
import { FaAngleDown, FaRegUser } from 'react-icons/fa';
//import { RiDashboardLine } from 'react-icons/ri'
//import { GrGroup } from 'react-icons/gr'


import './new-layout.css';

const Layout = ({ auth, userInfo }) => {
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  console.log('Layout.js user informations: ', userInfo)
  return (

    <>
      <div className="header-wrapper">
        <div className="header-container">
          <Link to="/">
          <div className="logo-container">
              {/* <img src={process.env.PUBLIC_URL + "/images/footer-logo.png"} alt="" /> */}
              <img src={`${process.env.PUBLIC_URL}/images/footer-logo.png`} alt="" />

              <h1 className="logo-text">CMS</h1>
            </div>
          </Link>
          {!userInfo
            ? <button>Log In</button>
            : <div className="account-container">
              <div className="acc-info">
                <p className="acc-name">{userInfo.name}</p>
                <p className="acc-email">Role: {userInfo.role}</p>
              </div>
              <div className="acc-icon">
                <FaRegUser className="account-icon" />
                <FaAngleDown />
              </div>
            </div>
          }

        </div>
      </div>

      <div className="dashboard-wrapper">
        <div className="sidebar">
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
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout;