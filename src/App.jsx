import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Markets from './components/Markets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <Markets />
      <Footer />
    </div>
  );
}

export default App;
