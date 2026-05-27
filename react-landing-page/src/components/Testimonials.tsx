import React from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        name: "John Doe",
        feedback: "This product has changed my life for the better! Highly recommend it to everyone.",
        position: "CEO, Company A"
    },
    {
        name: "Jane Smith",
        feedback: "An amazing experience! The team was incredibly supportive and the results were fantastic.",
        position: "Marketing Director, Company B"
    },
    {
        name: "Alice Johnson",
        feedback: "I was skeptical at first, but this truly delivers on its promises. A must-try!",
        position: "Product Manager, Company C"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-cards">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="feedback">"{testimonial.feedback}"</p>
                        <h3 className="client-name">{testimonial.name}</h3>
                        <p className="client-position">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;