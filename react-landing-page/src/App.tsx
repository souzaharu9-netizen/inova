import React from 'react';
import { Navbar, Hero, FeatureCard, Testimonials, CTA, Footer } from './components';
import MainLayout from './layouts/MainLayout';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <section className="features">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </section>
      <Testimonials />
      <CTA />
      <Footer />
    </MainLayout>
  );
};

export default App;