
import React from 'react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cogintech-dark mb-4">
            Measurable Business Impact
          </h2>
          <p className="text-xl text-gray-700">
            Our clients achieve significant operational and financial improvements
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* OPEX */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-gray-100 text-center animate-on-scroll">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-cogintech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-cogintech-dark mb-2">-30%</div>
            <h3 className="text-2xl font-bold text-cogintech-dark mb-4">OPEX Reduction</h3>
            <p className="text-gray-700">
              Significantly reduce operational expenses through optimized maintenance scheduling and prevention of unnecessary part replacements.
            </p>
          </div>
          
          {/* Downtime */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-gray-100 text-center animate-on-scroll delay-75">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-cogintech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-cogintech-dark mb-2">-70%</div>
            <h3 className="text-2xl font-bold text-cogintech-dark mb-4">Downtime Reduction</h3>
            <p className="text-gray-700">
              Dramatically decrease unplanned downtime through early detection of potential issues and proactive maintenance interventions.
            </p>
          </div>
          
          {/* ROI */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-gray-100 text-center animate-on-scroll delay-150">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-cogintech-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-cogintech-dark mb-2">5-7×</div>
            <h3 className="text-2xl font-bold text-cogintech-dark mb-4">ROI</h3>
            <p className="text-gray-700">
              Achieve return on investment of 5-7 times within the first year through cost savings and operational efficiencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
