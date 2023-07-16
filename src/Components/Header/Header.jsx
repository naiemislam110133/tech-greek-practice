import React from 'react';
import logo from "../../Assets/Image/logo.png";
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <NavLink className={({isActive})=> (isActive ? "active-link" : "link")} to='/'>Home</NavLink>
                <NavLink className={({isActive})=> (isActive ? "active-link" : "link")} to='/videos'>Videos</NavLink>
                <NavLink className={({isActive})=> (isActive ? "active-link" : "link")} to='/blog'>Blog</NavLink>
                <NavLink className={({isActive})=> (isActive ? "active-link" : "link")} to='/login'>Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;