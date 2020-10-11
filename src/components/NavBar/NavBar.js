import React from "react";
import "./navbar.css";

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="logo-img">
                <img src={require("../../assets/images/logo.png")} alt=""/>
            </div>
            <nav className="navbar-items">
                <li className="navbar-link">
                    <a href="#">Home</a>
                </li>
                <li className="navbar-link">
                    <a href="#">Skills</a>
                </li>
                <li className="navbar-link">
                    <a href="#">Portfolio</a>
                </li> <li className="navbar-link">
                    <a href="#">Contact</a>
                </li>
            </nav>
        </div>
    )
}

export default NavBar;