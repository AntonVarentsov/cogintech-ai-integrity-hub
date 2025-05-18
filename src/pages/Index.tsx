
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pain from '@/components/Pain';
import Solution from '@/components/Solution';
import Benefits from '@/components/Benefits';
import DataGovernance from '@/components/DataGovernance';
import CaseStudy from '@/components/CaseStudy';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import TrackingScript from '@/components/TrackingScript';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Benefits />
        <DataGovernance />
        <CaseStudy />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <TrackingScript />
    </div>
  );
};

export default Index;
