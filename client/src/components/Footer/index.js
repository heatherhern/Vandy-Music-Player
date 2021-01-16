import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to="/">Home </Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                </div>
            </div>
            <small class='website-rights'>VMP © 2021</small>
        </div>
    );
}

export default Footer;
