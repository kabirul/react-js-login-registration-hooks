import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({currentUser,logOut}) => {
  
    return (      
        <nav className="navbar navbar-expand navbar-dark bg-dark">
		
          <a href="https://github.com/kabirul">
			    <img src="https://amicacs.com/assets/images/logo.png" className="imground" alt="" /> 
			  </a> 	
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>           
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
		
      </nav>
    );
  }


export default Navbar; 