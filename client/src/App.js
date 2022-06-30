
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from 'axios';
import { useEffect, useState } from "react";


import Layout from './pages/layout';
import Home from './pages/Dashboard/home';
import Customers from './pages/Customers/customers';
import Users from './pages/Users/users';
import NoPage from './pages/NoPage';
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import LandingPage from "./pages/LandingPage/landingPage";
import Tasks from "./pages/Tasks/Tasks"
import MyTasks from "./pages/MyTasks/MyTasks";
import Account from "./pages/MyAccount/account";

import './App.css';




function App() {


  const [userData, setUserData] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    const readSession = async () => {
      Axios.defaults.withCredentials = true
      const result = await Axios.get('http://localhost:3001/login');

      if (result.data.loggedIn) {
        console.log('USER LOGIN DATA FROM APP.JS : ', result.data)
        setLoginStatus(true);
        setUserData(result.data.user)
      }
      else (
        setLoginStatus(false)
      )
    }
    readSession()
  }, [loginStatus])


  const loguj = (userData) => {
    console.log('user is logged in')
    setLoginStatus(true)
    setUserData(userData)
  }

  return (
    <div className="main">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LandingPage userInfo={userData} />} />
          <Route path="/dashboard" element={<Layout auth={loginStatus} userInfo={userData} />}>
            <Route path="home" index element={<Home />} />
            <Route path="customers" element={<Customers />} />
            <Route path="users" element={<Users />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="my-tasks" element={<MyTasks user={userData}/>} />
            <Route path="my-account" element={<Account user={userData}/>} />
          </Route>
          <Route path="/login" element={<Login onLoggingIn={loguj} auth={loginStatus} />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
