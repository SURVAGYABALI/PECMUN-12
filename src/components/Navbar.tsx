import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 py-4" style={{ backgroundColor: '#b2a5ff' }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="../../images/Your paragraph text (3).png" 
            alt="PECMUN Logo" 
            className="h-8 w-8"
          />
          <div className="text-white font-bold text-xl">PECMUN 12</div>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Committees', 'Schedule', 'Registration', 'Secretariat'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex space-x-4">
        <a href="https://www.instagram.com/pecmun.2025/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" />
          </a>
          {/* <Twitter className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" />
          <Facebook className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" /> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;