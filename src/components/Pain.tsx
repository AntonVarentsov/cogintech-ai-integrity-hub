
import React from 'react';

const Pain = () => {
  return (
    <section id="pain" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cogintech-dark">
          The Cost of Delayed Insights in Asset Integrity
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-cogintech-accent">
              <h3 className="text-2xl font-bold text-cogintech-dark mb-3">60-Day Decision Lag</h3>
              <p className="text-gray-700">
                The industry standard gap between inspection and decision-making wastes critical time 
                and resources, putting your assets at risk of unplanned downtime.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-cogintech-accent">
              <h3 className="text-2xl font-bold text-cogintech-dark mb-3">80% Time Wasted on Manual Reports</h3>
              <p className="text-gray-700">
                Your engineers spend 80% of their valuable time preparing manual reports instead of solving critical 
                problems and optimizing operations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-cogintech-accent">
              <h3 className="text-2xl font-bold text-cogintech-dark mb-3">Millions in Lost CAPEX</h3>
              <p className="text-gray-700">
                Delayed decisions lead to unnecessary equipment replacements, emergency repairs, 
                and operational inefficiencies that drain your capital resources.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative animate-on-scroll mx-auto max-w-md">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-cogintech-dark mb-2">Traditional Process</h3>
                  <div className="flex items-center space-x-2 text-red-500">
                    <div className="h-1 w-full bg-red-200 rounded-full">
                      <div className="h-1 w-[10%] bg-red-500 rounded-full"></div>
                    </div>
                    <span className="font-bold">60 days</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-cogintech-dark mb-2">CoginTech AI Solution</h3>
                  <div className="flex items-center space-x-2 text-green-500">
                    <div className="h-1 w-full bg-green-200 rounded-full">
                      <div className="h-1 w-[98%] bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-bold">24 hours</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-red-500">60</p>
                      <p className="text-xs text-gray-600">Days standard</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-cogintech-accent">96%</p>
                      <p className="text-xs text-gray-600">Time reduction</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-500">1</p>
                      <p className="text-xs text-gray-600">Day with AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pain;
