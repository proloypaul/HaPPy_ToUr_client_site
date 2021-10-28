import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">

                </div>
                <div className="nav-section">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Tour Services</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;