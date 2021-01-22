import React from 'react';
import { FaYoutube, FaSpotify, FaTwitter, FaUserCircle, FaCog, FaLock, FaHandsHelping, FaBookReader } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import "./style.css";

function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">

            {/* Column 1 */}
            <div className="col">
              <h4 style={{textDecorationLine: 'underline'}}>Socials</h4>
              <ui className="list-unstyled">
                <li><FaYoutube /></li>
                <li><FaSpotify/></li>
                <li><FaTwitter /></li>
              </ui>
            </div>
            
            {/* Column 2 */}
            <div className="col">
              <h4 style={{textDecorationLine: 'underline'}}>Account</h4>
              <ui className="list-unstyled">
                <li>Account Management <FaUserCircle /></li>
                <li>Settings <FaCog /></li>
                <li>Privacy <FaLock /></li>
              </ui>
            </div>

            {/* Column 3 */}
            <div className="col">
              <h4 style={{textDecorationLine: 'underline'}}>Contact Us</h4>
              <ui className="list-unstyled">
                <li>About Us <FaBookReader /></li>
                <li>Support <FaHandsHelping /></li>
                <li><Button id="newsletter" variant="outline-info">Get The Newsletter</Button></li>
              </ui>
            </div>
          </div>
          <hr id="line"/>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} VMP | All rights reserved | {' '}
              <a href="#"><b>Terms Of Service</b></a> | <a href="#"><b>Privacy</b></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
