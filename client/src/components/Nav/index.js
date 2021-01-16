import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

function Nav() {
    return (
        <Navbar className="navigation">
            <Navbar.Brand href="#home">Vandy Music Player <i class="fas fa-music"></i></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: Mark Otto
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;