import React from "react";
import "./navbar.css";

const NavBar = ({dark}) => {
    const darkMode = dark ? "dark" : dark;
    const logoFile = dark ? '../../assets/images/logo.png' : "../../assets/images/logo-black.png"
    const theme = {
        logo: "../../assets/images/logo.png"
    }
    return(
        <div className={`navbar ${darkMode}`}>
            <div className="logo-img">
                {!dark ? (
                    <img src={require("../../assets/images/logo.png")} alt="mkb-logo"/>
                ) : (
                    <img src={require("../../assets/images/logo-black.png")} alt="mkb-logo"/>
                )}
            </div>
            <nav className="navbar-items">
                <li className="navbar-link active">
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