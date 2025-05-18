
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-4 px-4 lg:px-8 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-cogintech-dark font-bold text-xl md:text-2xl">CoginTech<span className="text-cogintech-accent">.ltd</span></div>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm lg:text-base">
          <a href="#solution" className="text-gray-700 hover:text-cogintech-accent transition-colors">Solution</a>
          <a href="#benefits" className="text-gray-700 hover:text-cogintech-accent transition-colors">Benefits</a>
          <a href="#case-study" className="text-gray-700 hover:text-cogintech-accent transition-colors">Case Study</a>
          <a href="#about" className="text-gray-700 hover:text-cogintech-accent transition-colors">About</a>
        </nav>
        
        <Button 
          onClick={scrollToContact}
          className="bg-cogintech-accent hover:bg-blue-600 text-white"
          size="sm"
          id="header-cta-button"
        >
          Request a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
