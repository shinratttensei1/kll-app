import React from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active styles
import '../css/Header.css';

function Header() {
    return (
        <header className="start-header navigation-wrap">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/reading" className="nav-link" activeClassName="active">Reading Practice</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
