import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/global.css";

import AuthService from "./services/AuthService";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

const App = () => {
  
  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
			 
    const user = AuthService.getCurrentUser();
    if(user) {
      setCurrentUser(user);     
    }
	
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
	
  }, []);

  const logOut = () => {
      AuthService.logout();   
      setCurrentUser(undefined);
  };

  return (
    <div>
	
      <Navbar currentUser={currentUser} logOut={logOut} />

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />         
        </Routes>
      </div>
      <Footer />
      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
