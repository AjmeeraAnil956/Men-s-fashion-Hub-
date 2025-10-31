
import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">STYLE<span className="text-indigo-400">HUB</span></h3>
            <p className="pr-4">Your ultimate destination for men's fashion. Discover trends, get style advice, and shop the best looks.</p>
            <div className="flex space-x-4 mt-6">
              {SOCIAL_LINKS.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Stay in Touch</h3>
            <p className="mb-4">Subscribe to our newsletter or send us a message.</p>
            <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                     <input type="email" placeholder="Enter your email" className="flex-grow bg-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                     <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-md hover:bg-indigo-500 transition-colors">Subscribe</button>
                </div>
                <div>
                     <textarea placeholder="Your message..." rows={3} className="w-full bg-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
                 <button type="submit" className="bg-transparent border-2 border-indigo-500 text-indigo-400 font-bold py-2 px-6 rounded-md hover:bg-indigo-500 hover:text-white transition-colors">Send Message</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} StyleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
