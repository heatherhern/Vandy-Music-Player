import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import InputSlider from "../Slider";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./style.css";

function Nav(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/dashboard">
                    <FaHome /> {' '}
                    Vandy Music Player
                </Navbar.Brand>
                <Navbar.Toggle />
                <InputSlider />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{props.firstName}<FaUserAlt /></a>
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