import React from "react";
import "./footer.css";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';


const Footer = () => {

    return(
        <div className="footer">
            <ul className="social">
                <li className="social-link"><a href="#" target="_blank"><FaFacebookF /></a></li>
                <li className="social-link"><a href="#" target="_blank"><FaInstagram /></a></li>
                <li className="social-link"><a href="#" target="_blank"><FaLinkedinIn /></a></li>
            </ul>
        </div>
    )
}

export default Footer;