
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import LookbookSection from './components/LookbookSection';
import BlogSection from './components/BlogSection';
import ShopSection from './components/ShopSection';
import StyleAssistant from './components/StyleAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <LookbookSection />
        <BlogSection />
        <ShopSection />
        <StyleAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;
