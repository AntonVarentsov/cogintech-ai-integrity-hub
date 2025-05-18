
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">CoginTech<span className="text-cogintech-accent">.ltd</span></div>
            <p className="text-gray-400">
              Increase the efficiency of complex technological processes with advanced data analysis methods
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#solution" className="text-gray-400 hover:text-white transition-colors">Solution</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#case-study" className="text-gray-400 hover:text-white transition-colors">Case Study</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Chester, United Kingdom</li>
              <li><a href="mailto:contacts@cogintech.com" className="text-gray-400 hover:text-white transition-colors">contacts@cogintech.com</a></li>
              <li><button onClick={scrollToContact} className="text-cogintech-accent hover:underline">Request a Demo</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/gdpr-compliance" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 CoginTech Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
