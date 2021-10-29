import React from 'react';
import { NavLink } from 'react-router-dom';
import UseFirebase from '../Hooks/UseFirebase';
import "./Header.css";

const Header = () => {
    const {user, signOutProcess} = UseFirebase()
    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">

                </div>
                <div className="nav-section">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Tour Services</NavLink>
                    {user?.email ? <button onClick={signOutProcess}><NavLink to="/login">LogOut</NavLink></button> : <button><NavLink to="/login">Login</NavLink></button>}
                </div>
            </nav>
            
        </div>
    );
};

export default Header;