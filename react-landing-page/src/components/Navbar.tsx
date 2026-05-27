import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">BrandName</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="#features">Features</Link>
                </li>
                <li>
                    <Link to="#testimonials">Testimonials</Link>
                </li>
                <li>
                    <Link to="#cta">Get Started</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;