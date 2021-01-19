import React from "react";
import ReactLogo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./style.css";

function Nav() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        alt="react logo"
                        src={ReactLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Vandy Music Player
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto <FaUserAlt /></a>
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