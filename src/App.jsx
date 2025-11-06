import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import NewsAnnouncements from './components/NewsAnnouncements';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSlider />
        <NewsAnnouncements />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
