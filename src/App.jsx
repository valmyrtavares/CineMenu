import React from 'react';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <ProblemStatement />
      <Features />
      <InteractiveDemo />
      <Contact />
    </div>
  );
}

export default App;
