import React from 'react';
import { FaYoutube, FaSpotify, FaTwitter } from "react-icons/fa";
import "./style.css";

function Footer() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4 style={{textDecorationLine: 'underline'}}>Socials</h4>
              <ui className="list-unstyled">
                <li><FaYoutube /></li>
                <li><FaSpotify/></li>
                <li><FaTwitter /></li>
              </ui>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4 style={{textDecorationLine: 'underline'}}>Contact Us</h4>
              <ui className="list-unstyled">
                <li>About Us</li>
                <li>Support</li>
                <li>Blog</li>
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
