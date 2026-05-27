import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h4>About Us</h4>
                    <p>We are a team of passionate individuals committed to delivering the best solutions for our clients.</p>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-tech">
                    <h4>Technologies Used</h4>
                    <p>React, TypeScript, Vite, CSS</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;