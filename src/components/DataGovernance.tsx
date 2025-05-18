
import React from 'react';

const DataGovernance = () => {
  return (
    <section id="data-governance" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden animate-on-scroll">
              <div className="bg-gray-900 p-3 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-white text-sm ml-2">CoginTech Integrity Database</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-12 gap-4 mb-4">
                  <div className="col-span-3 font-bold text-xs text-gray-500">Asset ID</div>
                  <div className="col-span-3 font-bold text-xs text-gray-500">Location</div>
                  <div className="col-span-2 font-bold text-xs text-gray-500">Status</div>
                  <div className="col-span-2 font-bold text-xs text-gray-500">Risk Level</div>
                  <div className="col-span-2 font-bold text-xs text-gray-500">Last Updated</div>
                </div>
                
                {[
                  { id: "FPSO-N3421", location: "North Sea", status: "Good", risk: "Low", updated: "2025-04-12" },
                  { id: "PLT-GC552", location: "Gulf of Mexico", status: "Attention", risk: "Medium", updated: "2025-04-14" },
                  { id: "RIG-P87X4", location: "Caspian Sea", status: "Critical", risk: "High", updated: "2025-05-01" },
                  { id: "TERM-A293", location: "Baltic Sea", status: "Good", risk: "Low", updated: "2025-04-29" },
                  { id: "PLT-MX772", location: "Persian Gulf", status: "Attention", risk: "Medium", updated: "2025-04-18" },
                ].map((item, index) => (
                  <div key={index} className={`grid grid-cols-12 gap-4 p-3 text-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} rounded`}>
                    <div className="col-span-3">{item.id}</div>
                    <div className="col-span-3">{item.location}</div>
                    <div className="col-span-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'Good' ? 'bg-green-100 text-green-800' : 
                        item.status === 'Attention' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.risk === 'Low' ? 'bg-blue-100 text-blue-800' : 
                        item.risk === 'Medium' ? 'bg-orange-100 text-orange-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.risk}
                      </span>
                    </div>
                    <div className="col-span-2 text-gray-500">{item.updated}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-cogintech-dark mb-4">
              Unified Data Governance
            </h2>
            <p className="text-xl text-gray-700">
              All your historical inspection reports consolidated into one centralized, searchable database.
            </p>
            
            <ul className="space-y-4">
              {[
                "Centralize all historical and current integrity data",
                "Track performance trends across your entire asset portfolio",
                "Instantly search and compare inspection results",
                "Create custom reports based on any parameters",
                "Ensure compliance with regulatory requirements"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-cogintech-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataGovernance;
