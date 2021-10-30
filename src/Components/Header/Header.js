import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import "./Header.css";

const Header = () => {
    const {user, signOutProcess} = useAuth()
    return (
        <div className="header-container">
            <nav className="navbar container">
                <div className="nav-logo">

                </div>
                <div className="nav-section">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">TourServices</NavLink>
                    <NavLink to="/manageAllOrder">ManageOrders</NavLink>
                    {user?.email ? <button onClick={signOutProcess}><NavLink to="/login">LogOut</NavLink></button> : <button><NavLink to="/login">Login</NavLink></button>}
                </div>
            </nav>
            
        </div>
    );
};

export default Header;