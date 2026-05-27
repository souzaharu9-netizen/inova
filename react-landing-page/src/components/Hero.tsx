import React from 'react';
import './Hero.css'; // Assuming you will create a Hero.css for specific styles

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Our Project</h1>
                <p className="hero-subtitle">Making an impact, one step at a time.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="hero-illustration">
                <img src="/path/to/illustration.png" alt="Illustration" />
            </div>
        </section>
    );
};

export default Hero;