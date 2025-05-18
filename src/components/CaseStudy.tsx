
import React from 'react';

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cogintech-dark mb-4">
            Client Success Story
          </h2>
          <p className="text-xl text-gray-700">
            See how our solution delivers real-world results
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3">
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <img 
                  src="/placeholder.svg" 
                  alt="North Sea FPSO" 
                  className="w-full h-auto rounded"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-cogintech-dark mb-1">FPSO North Sea</h4>
                <p className="text-gray-500 text-sm">Major Oil & Gas Operator</p>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-6">
              <h3 className="text-2xl font-bold text-cogintech-dark">
                From 14 Days to 6 Hours: $480,000 Saved in a Single Inspection Cycle
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-cogintech-dark mb-2">Challenge</h4>
                  <p className="text-gray-700">
                    A major North Sea FPSO operator was struggling with lengthy integrity report turnaround times,
                    averaging 14 days per inspection cycle, leading to delayed maintenance decisions and increased risk.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-cogintech-dark mb-2">Solution</h4>
                  <p className="text-gray-700">
                    Implementation of CoginTech's AI Integrity Report system to process inspection data, 
                    automate analysis, and generate comprehensive actionable reports.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-cogintech-dark mb-2">Results</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reduced report turnaround time from 14 days to just 6 hours</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Saved $480,000 in a single inspection cycle</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Early detection of 3 critical failure points previously missed</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>98% reduction in engineer time spent on report preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="inline-block bg-cogintech-accent/10 px-4 py-2 rounded-lg">
                  <span className="text-cogintech-accent font-bold">ROI:</span> <span className="font-bold">6.2× return in first year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
