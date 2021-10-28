import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="added-banner">
            <nav className="navbar">
                <div className="nav-logo">

                </div>
                <div className="nav-section">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Tour Services</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </nav>
            <div className="banner-section">
                <div>
                    <h1>Search to find your tour</h1>
                    <input type="text" placeholder="type here" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;