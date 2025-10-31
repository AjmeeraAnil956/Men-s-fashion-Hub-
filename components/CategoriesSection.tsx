
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-2xl font-bold tracking-wider uppercase drop-shadow-md">{category.name}</h3>
    </div>
  </div>
);

const CategoriesSection: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Shop by <span className="text-indigo-400">Category</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
