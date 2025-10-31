
import React from 'react';
import { LOOKBOOK_IMAGES } from '../constants';

const LookbookSection: React.FC = () => {
  return (
    <section id="lookbook" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Fashion <span className="text-indigo-400">Lookbook</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {LOOKBOOK_IMAGES.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src={src}
                alt={`Lookbook image ${index + 1}`}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-indigo-500 text-indigo-400 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
