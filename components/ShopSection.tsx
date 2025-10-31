
import React from 'react';
import { SHOP_ITEMS } from '../constants';
import { ShopItem } from '../types';

const ShopItemCard: React.FC<{ item: ShopItem }> = ({ item }) => (
    <div className="relative group overflow-hidden rounded-lg shadow-xl bg-gray-800">
        <img src={item.image} alt={item.name} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
            <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                <ul className="text-sm text-gray-300 mb-2 list-disc list-inside">
                    {item.items.map(piece => <li key={piece}>{piece}</li>)}
                </ul>
                <p className="text-xl font-semibold text-indigo-400 mb-4">${item.price.toFixed(2)}</p>
                <button className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors duration-300">
                    Where to Buy
                </button>
            </div>
        </div>
    </div>
);

const ShopSection: React.FC = () => {
  return (
    <section id="shop" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Recommended <span className="text-indigo-400">Outfits</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOP_ITEMS.map((item) => (
            <ShopItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
