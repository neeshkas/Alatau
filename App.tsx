import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { Safety } from './components/Safety';
import { Ecology } from './components/Ecology';
import { Vision } from './components/Vision';
import { Roadmap } from './components/Roadmap';
import { RoutesMap } from './components/RoutesMap';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-base">
      <Navigation />
      
      {/* Scroll Snap Container */}
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar overscroll-contain pt-24 md:pt-28">
        <Hero />
        <Technology />
        <Safety />
        <Ecology />
        <Vision />
        <Roadmap />
        <RoutesMap />
        <Team />
        <Footer />
      </main>
    </div>
  );
};

export default App;
