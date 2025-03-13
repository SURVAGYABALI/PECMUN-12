import React from 'react';
import { Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>contact@xyzmun2025.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;