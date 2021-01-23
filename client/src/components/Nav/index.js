import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaUserCheck, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./style.css";
import InputSlider from "../Slider";

function Nav(props) {
    return (
        <>
            <Navbar variant="dark" sticky="top" style={{background: "#252525"}}>
                <Navbar.Brand href="/dashboard" id="webtitle">
                    <FaHome /> {' '}
                    Vandy Music Player
                </Navbar.Brand>
                <InputSlider/>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <FaUserCheck/> You Are Signed In:
                    </Navbar.Text>
                </Navbar.Collapse>
                <div className="signout">
                <Link to="/login">
                    <Button variant="info">Sign Out</Button>
                </Link>
                </div>
            </Navbar>
        </>
    );
}

export default Nav;