
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 pb-24 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <p className="text-cogintech-dark/80 text-lg">Increase the efficiency of complex technological processes</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cogintech-dark leading-tight">
            <span className="text-cogintech-accent">24-hour AI Integrity Report</span> — eliminate unplanned downtime and cut inspection costs <span className="text-cogintech-red">by 30%</span>
          </h1>
          <p className="text-xl text-gray-700">
            Transform your asset integrity management with AI-powered digital twins that deliver actionable insights in hours, not months.
          </p>
          <div className="pt-4">
            <Button 
              onClick={scrollToContact} 
              className="bg-cogintech-accent hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto"
              id="hero-cta-button"
            >
              Request a Demo
            </Button>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-cogintech-accent/10 rounded-full"></div>
          <img 
            src="/lovable-uploads/db16c9c1-9aa9-4015-b273-2dcd0f770f9a.png" 
            alt="AI-powered asset integrity dashboard showing a 3D pipe visualization with measurement data" 
            className="relative z-10 rounded-xl shadow-2xl w-full"
          />
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-cogintech-accent/5 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
