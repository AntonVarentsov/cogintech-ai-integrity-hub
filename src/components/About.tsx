
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-cogintech-dark mb-4">
              About CoginTech
            </h2>
            <p className="text-xl text-gray-700">
              Founded in 2018 by graduates of Nizhny Novgorod State University (NNSU), 
              CoginTech has grown into a leading provider of AI solutions for the oil and gas industry.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-cogintech-dark mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To increase the efficiency of complex technological processes with advanced data analysis methods, 
                  making industrial operations safer, more reliable, and more profitable.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-cogintech-dark mb-2">Our Expertise</h3>
                <p className="text-gray-700">
                  We combine deep domain expertise in industrial asset integrity with cutting-edge AI and 
                  machine learning capabilities to solve the most challenging problems in the energy sector.
                </p>
              </div>
            </div>
            
            <div>
              <p className="text-gray-700 font-bold">Headquarters: Chester, United Kingdom</p>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg animate-on-scroll">
              <h3 className="text-xl font-bold text-cogintech-dark mb-6 text-center">Trusted By Industry Leaders</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="flex items-center justify-center h-16 bg-gray-100 rounded-md">
                    <div className="text-gray-400 font-bold">Client Logo</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-cogintech-accent">50+</p>
                    <p className="text-xs text-gray-600">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-cogintech-accent">12</p>
                    <p className="text-xs text-gray-600">Countries</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-cogintech-accent">7</p>
                    <p className="text-xs text-gray-600">Years Experience</p>
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

export default About;
