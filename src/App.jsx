import React, { useState } from 'react';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Contact from './components/Contact';
import VideoModal from './components/VideoModal';

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoStartTime, setVideoStartTime] = useState(0);

  const openVideoModal = (startTime = 0) => {
    setVideoStartTime(startTime);
    setIsVideoOpen(true);
  };

  return (
    <div className="app-container">
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} startTime={videoStartTime} />
      <Hero openVideoModal={() => openVideoModal(0)} />
      <ProblemStatement />
      <Features openVideoModal={() => openVideoModal(38)} />
      <InteractiveDemo />
      <Contact />
    </div>
  );
}

export default App;
