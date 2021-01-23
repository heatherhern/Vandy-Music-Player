import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../NotFoundPage/error.png'
import Button from 'react-bootstrap/Button'
import "./style.css";

function NotFoundPage() {
    return (
        <>
            <img src={ErrorImage} className="errorImage" alt="Logo" />
            <p style={{ textAlign: "center" }}>
                <Link to="/login">
                    <Button variant="outline-primary">Go To Home</Button>
                </Link>
            </p>
        </>
    );
}
export default NotFoundPage;