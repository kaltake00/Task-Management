import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css'

//import { FiUserCheck } from 'react-icons/fi'
//import { BiLogIn } from 'react-icons/bi'
//import { FaAngleDown, FaRegUser } from 'react-icons/fa';

import UserInfo from '../../UI/Header/UserInfo';
import AuthButtons from '../../UI/Header/AuthButtons';



function LandingPage({ userInfo }) {
  console.log(userInfo)
  return (

    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />

      <div className="header-wrapper">
        <div className="header-container">
          <Link to="/">
            <div className="logo-container">
              <img src={process.env.PUBLIC_URL + "images/footer-logo.png"} alt="" />
              <h1 className="logo-text">CMS</h1>
            </div>
          </Link>

          {userInfo.length < 1 ? <AuthButtons /> : <UserInfo userInfo={userInfo} />}
        </div>
      </div>

      <div className='main-banner'>
        <div className='container d-flex flex-column justify-content-center text-center'>

          <h1 className='mx-10'>You are looking for a</h1>
          <h1>Customers and Task Management App ?</h1>
          <h3>Then You are on a right place!</h3>

          <div className='buttons-wrapper mt-5'>
            <Link to="/dashboard/home">
              <button className='landing-main-btn cta-primary-btn'>Go to dashboard</button>
            </Link>
          </div>

          {/* <div className='row'>
            <div className='lefside-text col-md-6 d-flex flex-column justify-content-center'>
              <h1 className='mx-10'>Looking for a Customer and Task Management Aplication</h1>
              <h3>Then You are on a right place!</h3>
            </div>
            <div className='righrside-img col-md-6'>
              <img className='w-100' src={process.env.PUBLIC_URL+"images/landing1.png"} alt="" />
            </div>
          </div> */}
        </div>
        <div className='waves-wrapper'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,261.3C480,256,600,224,720,208C840,192,960,192,1080,197.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className='first-landing-section py-50'>
        <div className='container mt-50'>
          <h1>Other sections of site are under construction</h1>
        </div>
      </div>


    </div>
  )
}

export default LandingPage