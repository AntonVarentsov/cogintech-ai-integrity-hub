
import React from 'react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cogintech-dark mb-4">
            Simple 3-Step Solution
          </h2>
          <p className="text-xl text-gray-700">
            Our AI-powered integrity reporting process transforms months of work into a streamlined 24-hour workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-on-scroll">
            <div className="w-16 h-16 bg-cogintech-accent/10 rounded-full flex items-center justify-center mb-6 text-cogintech-accent">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold text-cogintech-dark mb-4">Upload</h3>
            <p className="text-gray-700">
              Simply upload your inspection data, images, and reports to our secure cloud platform. 
              We support all major inspection data formats.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-on-scroll delay-75">
            <div className="w-16 h-16 bg-cogintech-accent/10 rounded-full flex items-center justify-center mb-6 text-cogintech-accent">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold text-cogintech-dark mb-4">AI Analysis</h3>
            <p className="text-gray-700">
              Our proprietary AI engine processes and analyzes all your data, identifying patterns, 
              anomalies, and critical areas requiring attention.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-on-scroll delay-150">
            <div className="w-16 h-16 bg-cogintech-accent/10 rounded-full flex items-center justify-center mb-6 text-cogintech-accent">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold text-cogintech-dark mb-4">Audit-Ready PDF</h3>
            <p className="text-gray-700">
              Receive a comprehensive, audit-ready report with actionable insights and 
              clear recommendations for immediate implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToContact} 
            className="bg-cogintech-accent hover:bg-blue-600 text-white"
            id="solution-cta-button"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
