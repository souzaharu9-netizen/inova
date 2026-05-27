import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2>Ready to Get Started?</h2>
                <p>Join us today and take your project to the next level!</p>
                <div className="cta-buttons">
                    <a href="#get-started" className="btn btn-primary">Get Started</a>
                    <a href="#contact" className="btn btn-secondary">Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default CTA;